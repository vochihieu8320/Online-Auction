import Auction from '../model/aution.model';
import Auction_History from '../model/auction_history.model'
const mongoose = require("mongoose");


class AutionController {
    async getAuctions(req :any, res :any){
        try {
            const {productID} = req.query
            if (!productID){
                res.sendStatus(400)
            }
            else{
                const actions = await Auction.find({productID: productID });
                res.json(actions);
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
    
    async createAuctions(req :any, res :any){
        try {
            const result = await Auction.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }


    async auction_history(req :any, res :any){
        try {
            const productID = req.body.productID
            const ObjectId = mongoose.Types.ObjectId;

            const result =  await Auction_History.aggregate([
                {
                    $match: {productID: productID}
                },
                { $addFields: { "user": {
                    $toObjectId: "$userID"
                }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"user",
                        foreignField: "_id",
                        as: "owner"
                    }
                },
                {$unwind: { path: "$owner", preserveNullAndEmptyArrays: true }},
            ]);
            res.json(result)
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
}


export default new AutionController
