import Inbox from '../../model/inbox.model';
import template from "../../email_template/bider_seller";
import mailService from '../../service/mail.service'
import mail from "../../mailer/mailer";
import User from '../../model/user.model'

class InboxController{
    async index(req: any, res:any){
        try {
            const {skip, limit} = req.query;
            const result = await Inbox.aggregate([
                { "$addFields": { "userID": { "$toObjectId": "$owner" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"userID",
                        foreignField: "_id",
                        as: "own"
                    }
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
            res.sendStatus(500)
        }
    }

    async search(req: any, res: any){
        try {
            const {skip, limit, status} = req.query;
            const result = await Inbox.aggregate([
                {
                    $match: {status: status}
                },
                { "$addFields": { "userID": { "$toObjectId": "$owner" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"userID",
                        foreignField: "_id",
                        as: "own"
                    }
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
            res.sendStatus(500)
        }
    }

    async update(req: any, res: any){
        try {
            const inboxID = req.params.inboxID;
            try {
                const inbox = <any> await Inbox.findByIdAndUpdate(inboxID, req.body);
                const user = <any> await User.findById(inbox.owner);
                const form = {
                    name: user.name,
                }
                await user.updateOne({user_type: "2"})
                //create a template
                const forgot_pwd_template = template.bider_seller(form)
                //create option (sent to who ??)
                const mail_options = mailService.mail_options(user.email, forgot_pwd_template, "Bide to Seller");
                //conect mail server
                const transporter = mail.connect()
                //send mail
                mailService.send_mail(transporter, mail_options);
                res.json({status: 200})
            } catch (error) {
                console.log(error);
                res.sendStatus(500)
            }
        } catch (error) {
            
        }
    }

    async length(req: any, res: any){
        try {
            const result = await Inbox.count();
            res.json({status: 200, data: result});
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}

export default  new InboxController;