import FeedBack from '../model/feed_back.model';

class FeedBackController{

    async index(req: any, res: any){
        const userID = req.query.userID;
        const skip = req.query.skip
        const limit = req.query.limit
        try {
            const result = await FeedBack.aggregate([
                {
                    $match: {userID: userID} 
                },
                { $addFields: { "owner": { $toObjectId: "$ownerID" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"owner",
                        foreignField: "_id",
                        as: "judge"
                    }
                },
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                }
            ]);
            const count = await FeedBack.count({userID: userID})
            res.json({data: result, count: count});
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async create(req: any, res: any)
    {
        try {
            const result = await FeedBack.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}

export default new FeedBackController