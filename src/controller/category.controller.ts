import { CompletionTriggerKind } from "typescript";

const  category = require('../model/category.model');

class CategoryController{
    async List(req: any, res: any,next:any)
    {
        try{
            const cate = await category.aggregate([
                {$lookup:
                    {
                        from:'Category',
                        localField: 'ParentID',
                        foreignField: '_id',
                        as: 'type'
                    }
                }
            ])
            res.json({
                cate:cate
            })
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
        let _id = req.params.id;
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