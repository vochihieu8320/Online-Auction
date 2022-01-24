import Love_list from '../model/love_list.model';

class LoveListController {
    async create(req:any, res:any){
        try {
            await Love_list.create(req.body);
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
    async index(req: any, res: any)
    {
        try {
            const userID = req.params.userID;
            const result = await Love_list.aggregate([
                {
                    $match: {userID: userID}
                },
                { $addFields: { "product": { $toObjectId: "$productID" }}},
                {
                    $lookup:
                    {
                       
                        from: "Product",
                        localField:"product",
                        foreignField: "_id",
                        as: "productInfo"
                    }
                },
                {$unwind: { path: "$productInfo", preserveNullAndEmptyArrays: true }},
            ])

            const count = await Love_list.count({userID: userID})
            res.json({data: result, count: count})
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

export default new LoveListController