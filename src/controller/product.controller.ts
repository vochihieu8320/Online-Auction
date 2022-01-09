import Product from '../model/product.model';
import ProductService from "../service/product.service";
class ProductController{
    async findById(req:any,res:any,next:any){
        let id=req.params.id;
        try{
            res.json({
                product: await Product.findById(id)
            })
        }catch(err){
            console.log(err)
        }
    }
    async List(req: any, res: any,next:any)
    {
        try{
            const result = await this.s
        }catch(err){
            console.log(err)
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
            const data = await product.findByIdAndUpdate(req.params.productID, req.body, { returnOriginal: false });
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
            await product.findOneAndDelete({_id:_id})
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