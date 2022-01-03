import Auction from '../model/aution.model';

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
            const body = {
                holderID: req.body.holderID,
                productID: req.body.productID,
                min_price: req.body.min_price
            }
            const result = await Auction.create(body);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
}


export default new AutionController
