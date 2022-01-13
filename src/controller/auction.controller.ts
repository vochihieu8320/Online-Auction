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
            const result = await Auction.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
}


export default new AutionController
