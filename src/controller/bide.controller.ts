import Bide from '../model/bide.model';

class BideController{
    async addBide(req: any, res: any){
        try {
            const result = await Bide.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error); 
            res.sendStatus(400)           
        }
    }


}

export default new BideController