import userService from '../service/user.service'
import mailService from '../service/mail.service'
import User from '../model/user.model';
import mail from "../mailer/mailer";
import template from "../email_template/template"
import validate from '../service/Validation.service';
import otp_template from '../email_template/otp';
import Auction from '../model/aution.model';
import AuctionHistory from '../model/auction_history.model';

class NewController
{
   
    async forgot_pwd(req: any, res: any)
    {
        const email = req.body.email
        try {
            const user = <any> await User.findOne({ email: email });
            if (user) 
            {
                const regCode = userService.generateRegCode();
                const hash_reqCode = await userService.hashpass(regCode);
                //store hash_code in database
                await User.findOneAndUpdate({ email: email}, {reset_digest: hash_reqCode})
                const link = `${process.env.Domain_Fe}/forgot-pwd/${regCode}?email=${email}`;
                const form = {
                    name: user.name,
                    link: link
                }
                //create a template
                const forgot_pwd_template = template.forgot_pwd(form)
                //create option (sent to who ??)
                const mail_options = mailService.mail_options(email, forgot_pwd_template, "Forgot password");
                //conect mail server
                const transporter = mail.connect()
                //send mail
                mailService.send_mail(transporter, mail_options)
                res.sendStatus(200)
            }
            else
            {
                res.json({status: 400, error: "Email not found"})
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

    async Register(req: any, res: any)
    {
        try{
            const hashed = await userService.hashpass(req.body.password);
            const user = <any> await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashed,
                user_type: req.body.user_type
            })
            const token = userService.JWT(user)
            const refreshToken = userService.refreshToken(user)
            //update fresh token
            await User.updateOne({email: user.email}, {refreshToken: refreshToken})
            res.json({
                token: token,
                refreshToken: refreshToken
            });
        }catch(err){
            res.json({status:400, error: "name or email is already taken"})
            console.log(err);
        }    
    }
    
    async checkotp(req: any, res: any) {
        try {
            try {
                const user = await User.findOne({email: req.body.email, otp: req.body.otp});
                if(user){
                    await User.updateOne({email: req.body.email}, {otp:""});
                    res.sendStatus(200);
                }
                else {
                    res.sendStatus(400)
                }
            } catch (error) {
                console.log(error);
                res.sendStatus(500)
            }
        } catch (error) {
            
        }
    }

    async Login (req: any, res: any)
    {
        const { error } = validate.loginValidate(req.body);
        if (error)  return res.status(400).send(error.details[0].message);
            //check email
            const user =<any> await User.findOne({email:req.body.email})
            if(user){
                if (!user) return res.status(400).send('Email is wrong');
                    //check password
                   
                    const validPass = await userService.comparepass(req.body.password,user.password);
                    if(!validPass) return res.status(400).send('password is wrong');
                    //create token
                    const token = userService.JWT(user)
                    const refreshToken = userService.refreshToken(user)
                    //update fresh token
                    await User.updateOne({email: user.email}, {refreshToken: refreshToken})
                    res.json({
                        token: token,
                        refreshToken: refreshToken
                    });
                }
            else
            {
                res.json({status: 400, error: "Email not found"})
            }
    }

    async check_forgot_pwd(req: any, res: any)
    {
        const {email, regCode, password} = req.body;
        try {
            const user = <any> await User.findOne({email: email});
            if(user)
            {
                if(await userService.comparepass(regCode, user.reset_digest))
                {
                    const hashed = await userService.hashpass(password);
                    await User.updateOne({email: email}, {reset_digest: "", password: hashed})
                    res.sendStatus(200)
                }
                else
                {
                    res.sendStatus(400)
                }
            }
            else
            {
                res.sendStatus(400)
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }

    async refreshToken(req: any, res: any)
    {
        const {email, refreshToken} = req.body;
        //check refreshToken is valid or not
        try {
            const user =<any> await User.findOne({email: email});
            if(user.refreshToken === refreshToken)
            {
                const new_refresh_token = userService.refreshToken(user);
                const new_token = userService.JWT(user);
                //update new refreshtoken
                await User.updateOne({email: email}, {refreshToken: new_refresh_token})
                res.json({
                    token: new_token,
                    refreshToken: new_refresh_token
                })
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }

    }


    async changePwd(req: any, res: any)
    {
        const {email, password, new_password, new_password_confirmation} = req.body;
        if(new_password_confirmation === new_password)
        {
            try {
                const user = <any> await User.findOne({ email: email});
                if(user)
                {
                    if(await userService.comparepass(password, user.password))
                    {
                        const hash_newpassword = await userService.hashpass(new_password);
                        await User.findOneAndUpdate({email: email}, {password: hash_newpassword});
                        res.sendStatus(200)
                    }
                    else
                    {
                        res.json({status: 400, error: "Password dont match"})        
                    }
                }
                else
                {
                    res.json({status: 400, error: "User not found"})   
                }
            } 
            catch (error) {
                res.sendStatus(400)
            }
        }
        else
        {
            res.json({status: 400, error: "New Password confirm dont match"})
        }
    
    }

    async updatePassword(req: any, res: any)
    {
        const {email, password} = req.body;
        const hashed = await userService.hashpass(password);
        try {
            await User.findOneAndUpdate({email: email}, {password: hashed});
            res.sendStatus(200)
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }

    }

    async bide(req: any, res: any){
        try {
            const productID = req.body.productID;
            const auction = <any>await Auction.findOne({productID: productID});
            if(auction){
                const suggestion = (+auction.min_price) + (+auction.bide);
                res.json({status: 200, data: suggestion})
            }   
            else
            {
                res.sendStatus(400)
            }         
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async accept(req: any, res: any){
        try {
            const productID = req.body.productID;
            const userID = req.body.userID;
            if(productID && userID){
                //chap nhan muc gia
                await Auction.updateOne({productID: productID}, {min_price: req.body.price});
                //luu vao lich su
                const history = await AuctionHistory.create({
                    userID: userID,
                    productID: productID,
                    price : req.body.price
                }) 
                res.json({status: 200, data: history})
            }
            else
            {
                res.sendStatus(500)
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async show(req: any, res: any){
        try {
            const userID = req.params.userID
            const result = await User.findById(userID);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}

export default new NewController;