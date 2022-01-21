import Auction_History from '../model/auction_history.model';

    async function create(body:any){
        const check_history = await Auction_History.findOne(body);
        if(check_history === null){
            return await Auction_History.create(body);
        }
        return null;
    }


export default {create}