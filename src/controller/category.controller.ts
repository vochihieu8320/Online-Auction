import { CompletionTriggerKind } from "typescript";

const  category = require('../model/category.model');

class CategoryController{
    async List(req: any, res: any,next:any)
    {

        try{
            category
            .find() // find tất cả các data
                res.json(category) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
            }
        catch(err){
            console.log(err)
        }
    }

    async Add (req: any, res: any)
    {
       const new_cate= req.body;
       try{
            category.create({
              cate_id:new_cate.id,  
              name:new_cate.name,
              parentID:new_cate.parentID,
           })
           res.jon({
               save:true
           })
       }catch(err){
           console.log(err)
       }

    }
    async Delete(req: any, res: any)
    {
        let _id = req.body.id;
        try{
            await category.findOneAndDelete({_id:_id})
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

export default new CategoryController;