import { CompletionTriggerKind } from "typescript";

const  product = require('../model/product.model');
const jwt = require('jsonwebtoken');

class ProductController{
    async findById(req:any,res:any,next:any){
        let id=req.params.id;
        try{
            res.json({
                product: product.findOne({_id:id})
            })
        }catch(err){
            console.log(err)
        }
    }
    async List(req: any, res: any,next:any)
    {
        let perPage = 16; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1; 
        try{
            await product
            .find() // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err:any, products:any) => {
                product.countDocuments((err:any, count:any) => { // đếm để tính có bao nhiêu trang
                if (err) return next(err);
                res.json(products) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                });
            });
        }catch(err){
            console.log(err)
        }
    }

    async Add (req: any, res: any)
    {
       const new_pro= req.body;
       try{
           product.create({
              Pro_Id:new_pro.id,  
              name:new_pro.name,
              price:new_pro.price,
              seller:new_pro.seller,
              date_add:new_pro.date_add,
              date_bid:new_pro.datebid,
              buynow_price:new_pro.buynow,
              category:new_pro.category,
              descript:new_pro.descipt
           })
           res.jon({
               save:true
           })
       }catch(err){
           res.json({
               save:false
           })
           console.log(err)
       }

    }
    async Update(req: any, res: any)
    {
        const pro_temp=req.body;
        console.log(pro_temp);
        const key = Object.keys(pro_temp)
        pro_temp.idproduct=String(pro_temp.idproduct)
        console.log(pro_temp,key)
        try{
            const prod = await product.findOne({Pro_Id:pro_temp.idproduct})
            if(!prod) {
                return res.status(404).send("Can not find this product!")
            }
            key.forEach((update) => prod[update]=pro_temp[update])
            await prod.save();
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