import Inbox from '../model/inbox.model';

class InboxController{
   async create(req:any, res:any){
        try {
            const data = await Inbox.create(req.body);
            res.json({status: 200, data: data});
        } catch (error) {
            res.sendStatus(500);
        }
    }

}

export default new InboxController;