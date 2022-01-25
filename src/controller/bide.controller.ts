import Bide from '../model/bide.model';
import Auction_History from '../model/auction_history.model'
import Auction from '../model/aution.model';
import AuctionHistoryService from '../service/auction_history,service';

class BideController{
    async addBide(req: any, res: any){
        try {
            const check = await Bide.findOne({userID: req.body.userID, productID: req.body.productID})
            if(check)
            {
                await Bide.updateOne({userID: req.body.userID, productID: req.body.productID}, req.body);
            }
            else
            {
                await Bide.create(req.body);
            }

            const check_action = <any> await Auction.findOne({productID: req.body.productID});

            const aucton = {
                min_price: +req.body.current_price,
                status: 1,
                amount_bider_bide: check_action.amount_bider_bide + 1
            }
            await check_action.updateOne(aucton)
        
            const body = {
                userID: req.body.userID,
                productID: req.body.productID,
                price: req.body.current_price
            }
            const auction_history = await AuctionHistoryService.create(body);
            
            res.json({status: 200, data: auction_history});
        } catch (error) {
            console.log(error); 
            res.sendStatus(400)           
        }
    }

    async update(req: any, res: any){
        try {
            await Bide.findOneAndUpdate({userID: req.body.userID, productID: req.body.productID},
                {auto_bide: req.body.auto_bide});
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }

    async index(req: any, res: any){
        try {
            const userID = req.query.userID;
            const skip = req.query.skip;
            const limit = req.query.limit;
            const result = await Bide.aggregate([
                {
                    $match: {userID: userID},
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
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                }                
            ])
            const count = await Bide.count({userID: userID})
            res.json({data: result, count: count})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

}

export default new BideController