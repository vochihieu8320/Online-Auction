import Product from '../model/product.model';
import ProductService from "../service/product.service";
class ProductController{
    async show(req:any,res:any){
        try{
            const product = await Product.findById(req.params.productID);
            res.json(product);
        }catch(err){
            console.log(err);
            res.sendStatus(500);
        }
    }
    async List(req: any, res: any,next:any)
    {
        try{
            const {skip, limit}=req.query
            const result = await Product.aggregate([
                {
                    $limit: +limit
                },
                {
                    $skip: +skip
                },
                {
                    $sort: {"updatedAt": -1}
                }
            ])
            res.json(result)
        }catch(err){
            console.log(err);
            res.sendStatus(400);
        }
    }

    async Add (req: any, res: any)
    {
       try{
           if(await ProductService.checkCategory(req.body.categoryID)){
                const data = await Product.create(req.body)
                res.json({status: 200, data: data})
           }
           else
           {
            res.sendStatus({status: 400, error: "invalid category"})               
           }
          
       }catch(err){
           res.sendStatus(400)
       }

    }
    async Update(req: any, res: any)
    {
        try {
            const data = await Product.findByIdAndUpdate(req.params.productID, req.body, { returnOriginal: false });
            if(data){
                res.json({status: 200, data: data});     
            }
            else{
                res.json({status: 400, error:"invalid category"})
            }
        
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    
    }
    async Delete(req: any, res: any)
    {
        let _id = req.params.id;
        try{
            await Product.findOneAndDelete({_id:_id})
            res.json({
                save:true
            })
        }catch(error){
            console.log(error);
            res.json({
                save:false
            })
        }
    }
}

export default new ProductController;