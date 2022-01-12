import userService from '../../service/user.service'
import User from '../../model/user.model';
import template from "../../email_template/template";
import mailService from '../../service/mail.service'
import mail from "../../mailer/mailer";


class ManageController
{
    async List(req: any, res: any,next:any)
    {
        try {
            const {skip, limit} = req.query;
            const result = await User.aggregate([
                {
                    $match: {name: {
                        "$ne": "admin"
                   } }
                },
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                },
                {
                    $sort: {"updatedAt": -1}
                }
            ])
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    
    async Delete(req: any, res: any)
    {
        let _id = req.params.id;
        try{
            await User.deleteOne({_id:_id})
            res.json({
                save:true,
                status:200
            })
        }catch(error){
            console.log(error);
            res.json({
                save:false,
                status:400
            })
        }
    }

    async reset(req: any, res: any){
        try {
            const userID = req.params.userID;
            //find user
            const user =<any> await User.findById(userID);
            if (user){
                const regCode = userService.generateRegCode();
                const hash_reqCode = await userService.hashpass(regCode);
                await User.findByIdAndUpdate(userID, {reset_digest: hash_reqCode});

                const link = `${process.env.Domain_Fe}/forgot-pwd/${regCode}?email=${user.email}`;
                const form = {
                    name: user.name,
                    link: link
                }
                //create a template
                const forgot_pwd_template = template.forgot_pwd(form)
                //create option (sent to who ??)
                const mail_options = mailService.mail_options(user.email, forgot_pwd_template, "Forgot password");
                //conect mail server
                const transporter = mail.connect()
                //send mail
                mailService.send_mail(transporter, mail_options);
                res.sendStatus(200)
            }
            else
            {
                res.sendStatus(400)
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async length(req: any, res: any){
        try {
            const result = await User.count();
            console.log(result)
            res.json({status: 200, data: result})
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

export default new ManageController;