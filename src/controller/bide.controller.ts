import Bide from '../model/bide.model';
import Auction_History from '../model/auction_history.model'

class BideController{
    async addBide(req: any, res: any){
        try {
            let auction_history:any
            const check = await Bide.findOne({userID: req.body.userID, productID: req.body.productID})
            if(check)
            {
                await Bide.updateOne({userID: req.body.userID, productID: req.body.productID}, req.body);
            }
            else
            {
                await Bide.create(req.body);
                const body = {
                    userID: req.body.userID,
                    productID: req.body.productID,
                    price: req.body.current_price
                }
               auction_history = await Auction_History.create(body);
            }
            
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

}

export default new BideController