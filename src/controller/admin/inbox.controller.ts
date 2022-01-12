import Inbox from '../../model/inbox.model';

class InboxController{
    async index(req: any, res:any){
        try {
            const {skip, limit} = req.query;
            const result = await Inbox.aggregate([
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
                await Inbox.findByIdAndUpdate(inboxID, req.body);
                res.json({status: 200})
            } catch (error) {
                console.log(error);
                res.sendStatus(500)
            }
        } catch (error) {
            
        }
    }
}

export default  new InboxController;