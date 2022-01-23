import Auction_History from '../model/auction_history.model';

class AuctionHistory{

    async destroy(req: any, res: any) {
        const id = req.params.id;
        try {
            await Auction_History.findByIdAndDelete(id);
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}

export default new AuctionHistory