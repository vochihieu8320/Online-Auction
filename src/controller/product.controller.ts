const  product = require('../model/product.model');

class NewController{
    async index(req: any, res: any,next:any)
    {
        let perPage = 8; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1; 
        try{
            product
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
     
       try{
          const data = await product.create(req.body)
           res.json({status: 200, data: data})
       }catch(err){
           res.sendStatus(400)
           console.log(err)
       }

    }
    async Update(req: any, res: any)
    {
        try
        {
            const data = await product.findByIdAndUpdate(req.params.productID, req.body, { returnOriginal: false });
            res.json({status: 200, data: data});
        }
        catch(error){
            console.log(error);
            res.sendStatus(400)        
        }   
    
    }
    async Delete(req: any, res: any)
    {
        try{
            await product.findOneAndDelete({_id: req.params.productID})
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

export default new NewController;