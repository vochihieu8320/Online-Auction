"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../service/user.service"));
const mail_service_1 = __importDefault(require("../service/mail.service"));
const user_model_1 = __importDefault(require("../model/user.model"));
const mailer_1 = __importDefault(require("../mailer/mailer"));
const template_1 = __importDefault(require("../email_template/template"));
const Validation_service_1 = __importDefault(require("../service/Validation.service"));
const aution_model_1 = __importDefault(require("../model/aution.model"));
const auction_history_model_1 = __importDefault(require("../model/auction_history.model"));
const bide_model_1 = __importDefault(require("../model/bide.model"));
const rating_service_1 = __importDefault(require("../service/rating.service"));
class NewController {
    forgot_pwd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            try {
                const user = yield user_model_1.default.findOne({ email: email });
                if (user) {
                    const regCode = user_service_1.default.generateRegCode();
                    const hash_reqCode = yield user_service_1.default.hashpass(regCode);
                    //store hash_code in database
                    yield user_model_1.default.findOneAndUpdate({ email: email }, { reset_digest: hash_reqCode });
                    const link = `${process.env.Domain_Fe}/forgot-pwd/${regCode}?email=${email}`;
                    const form = {
                        name: user.name,
                        link: link
                    };
                    //create a template
                    const forgot_pwd_template = template_1.default.forgot_pwd(form);
                    //create option (sent to who ??)
                    const mail_options = mail_service_1.default.mail_options(email, forgot_pwd_template, "Forgot password");
                    //conect mail server
                    const transporter = mailer_1.default.connect();
                    //send mail
                    mail_service_1.default.send_mail(transporter, mail_options);
                    res.sendStatus(200);
                }
                else {
                    res.json({ status: 400, error: "Email not found" });
                }
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
    Register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashed = yield user_service_1.default.hashpass(req.body.password);
                const user = yield user_model_1.default.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashed,
                    user_type: req.body.user_type
                });
                const token = user_service_1.default.JWT(user);
                const refreshToken = user_service_1.default.refreshToken(user);
                //update fresh token
                yield user_model_1.default.updateOne({ email: user.email }, { refreshToken: refreshToken });
                res.json({
                    token: token,
                    refreshToken: refreshToken
                });
            }
            catch (err) {
                res.json({ status: 400, error: "name or email is already taken" });
                console.log(err);
            }
        });
    }
    checkotp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    const user = yield user_model_1.default.findOne({ email: req.body.email, otp: req.body.otp });
                    if (user) {
                        yield user_model_1.default.updateOne({ email: req.body.email }, { otp: "" });
                        res.sendStatus(200);
                    }
                    else {
                        res.sendStatus(400);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.sendStatus(500);
                }
            }
            catch (error) {
            }
        });
    }
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = Validation_service_1.default.loginValidate(req.body);
            if (error)
                return res.status(400).send(error.details[0].message);
            //check email
            const user = yield user_model_1.default.findOne({ email: req.body.email });
            if (user) {
                if (!user)
                    return res.status(400).send('Email is wrong');
                //check password
                const validPass = yield user_service_1.default.comparepass(req.body.password, user.password);
                if (!validPass)
                    return res.status(400).send('password is wrong');
                //create token
                const token = user_service_1.default.JWT(user);
                const refreshToken = user_service_1.default.refreshToken(user);
                //update fresh token
                yield user_model_1.default.updateOne({ email: user.email }, { refreshToken: refreshToken });
                res.json({
                    token: token,
                    refreshToken: refreshToken
                });
            }
            else {
                res.json({ status: 400, error: "Email not found" });
            }
        });
    }
    check_forgot_pwd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, regCode, password } = req.body;
            try {
                const user = yield user_model_1.default.findOne({ email: email });
                if (user) {
                    if (yield user_service_1.default.comparepass(regCode, user.reset_digest)) {
                        const hashed = yield user_service_1.default.hashpass(password);
                        yield user_model_1.default.updateOne({ email: email }, { reset_digest: "", password: hashed });
                        res.sendStatus(200);
                    }
                    else {
                        res.sendStatus(400);
                    }
                }
                else {
                    res.sendStatus(400);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, refreshToken } = req.body;
            //check refreshToken is valid or not
            try {
                const user = yield user_model_1.default.findOne({ email: email });
                if (user.refreshToken === refreshToken) {
                    const new_refresh_token = user_service_1.default.refreshToken(user);
                    const new_token = user_service_1.default.JWT(user);
                    //update new refreshtoken
                    yield user_model_1.default.updateOne({ email: email }, { refreshToken: new_refresh_token });
                    res.json({
                        token: new_token,
                        refreshToken: new_refresh_token
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
    changePwd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, new_password, new_password_confirmation } = req.body;
            if (new_password_confirmation === new_password) {
                try {
                    const user = yield user_model_1.default.findOne({ email: email });
                    if (user) {
                        if (yield user_service_1.default.comparepass(password, user.password)) {
                            const hash_newpassword = yield user_service_1.default.hashpass(new_password);
                            yield user_model_1.default.findOneAndUpdate({ email: email }, { password: hash_newpassword });
                            res.sendStatus(200);
                        }
                        else {
                            res.json({ status: 400, error: "Password dont match" });
                        }
                    }
                    else {
                        res.json({ status: 400, error: "User not found" });
                    }
                }
                catch (error) {
                    res.sendStatus(400);
                }
            }
            else {
                res.json({ status: 400, error: "New Password confirm dont match" });
            }
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const hashed = yield user_service_1.default.hashpass(password);
            try {
                yield user_model_1.default.findOneAndUpdate({ email: email }, { password: hashed });
                res.sendStatus(200);
            }
            catch (error) {
                console.log(error);
                res.sendStatus(400);
            }
        });
    }
    bide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productID = req.body.productID;
                const auction = yield aution_model_1.default.findOne({ productID: productID });
                if (auction) {
                    const suggestion = (+auction.min_price) + (+auction.bide);
                    res.json({ status: 200, data: suggestion });
                }
                else {
                    res.sendStatus(400);
                }
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
    accept(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productID = req.body.productID;
                const userID = req.body.userID;
                if (productID && userID) {
                    //chap nhan muc gia
                    yield aution_model_1.default.updateOne({ productID: productID }, { min_price: req.body.price });
                    //luu vao lich su
                    const history = yield auction_history_model_1.default.create({
                        userID: userID,
                        productID: productID,
                        price: req.body.price
                    });
                    res.json({ status: 200, data: history });
                }
                else {
                    res.sendStatus(500);
                }
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userID = req.params.userID;
                const result = yield user_model_1.default.findById(userID);
                const rating = rating_service_1.default.show(result.rating);
                res.json({ data: result, rating: rating });
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
    current_bide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.params.userID;
            const productID = req.params.productID;
            try {
                const result = yield bide_model_1.default.findOne({ userID: userID, productID: productID });
                res.json(result);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
    }
    update_me(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userID = req.params.userID;
                yield user_model_1.default.findByIdAndUpdate(userID, req.body);
                res.json({ status: 200 });
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        });
    }
}
exports.default = new NewController;
