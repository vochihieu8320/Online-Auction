import userService from '../service/user.service'
import mailService from '../service/mail.service'
import User from '../model/user.model';
import mail from "../mailer/mailer";
import template from "../email_template/template"
import validate from '../service/Validation.service';
import otp_template from '../email_template/otp'
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
                res.sendStatus(400)
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
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashed,
                user_type: req.body.user_type
            })
            res.sendStatus(200)
        }catch(err){
            res.json({status:400, error: "name or email is already taken"})
            console.log(err);
        }    
    }
    
    // async getOtp(req: any, res: any){
    //     try {
    //             const regCode = userService.generateRegCode();
    
    //             const form = {
    //                 name : user.name,
    //                 otp: regCode
    //             }
    //             //create template
    //             const template = <any> otp_template.otp_template(form);
    //             const mail_options = mailService.mail_options(user.email, template, "Active Account");
    //             const transporter = mail.connect()
    //             //send mail
    //             mailService.send_mail(transporter, mail_options);
    //             //luu db
    //             await User.findOneAndUpdate({email: user.email}, {otp: regCode});
    //             res.sendStatus(200)
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         res.sendStatus(400)
    //     }
       
    // }

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
                    await User.updateOne({email: user.email, refreshToken: refreshToken})
                    res.json({
                        token: token,
                        refreshToken: refreshToken
                    });
                }
            else
            {
                res.sendStatus(400)
            }
    }

    async check_forgot_pwd(req: any, res: any)
    {
        const {email, regCode} = req.body;
        try {
            const user = <any> await User.findOne({email: email});
            if(user)
            {
                if(await userService.comparepass(regCode, user.reset_digest))
                {
                    await User.updateOne({email: email}, {reset_digest: ""})
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
        if(new_password_confirmation == new_password)
        {
            const user = <any> await User.findOne({ email: email});
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
        }
        else
        {
            res.json({status: 400, error: "New Password confirm dont match"})
        }
    
    }
}

export default new NewController;