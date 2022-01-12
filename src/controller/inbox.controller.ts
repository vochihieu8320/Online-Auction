import Inbox from '../model/inbox.model';
import User from '../model/user.model';

class InboxController{
   async create(req:any, res:any){
        try {
            const user = <any> await User.findById(req.body.owner);
            if(user && user.user_type === "1"){
                const data = await Inbox.create(req.body);
                return res.json({status: 200, data: data});
            }
            else{
                res.sendStatus(400)
            }
           
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

}

export default new InboxController;