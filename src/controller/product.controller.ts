import Product from '../model/product.model';
import ProductService from "../service/product.service";
import Category from '../model/category.model';
import sortService from "../service/sort.service";
import Auction from '../model/aution.model';
const mongoose = require("mongoose");

class ProductController{
    async show(req:any,res:any){
        try{
            const productID = req.params.productID;
            const ObjectId = mongoose.Types.ObjectId;

            const product = await Product.aggregate([
                {
                    $match: {_id: ObjectId(productID)}
                },
                { $addFields: { "productID": { $toString: "$_id" }}},
                {
                    $lookup:
                    {
                       
                        from: "auctions",
                        localField:"productID",
                        foreignField: "productID",
                        as: "auction"
                    }
                },
                {$unwind: { path: "$auction", preserveNullAndEmptyArrays: true }},
            ])
            res.json(product);
        }catch(err){
            console.log(err);
            res.sendStatus(500);
        }
    }
    async List(req: any, res: any,next:any)
    {
        try{
            const sort = req.query.sortBy || "price";
            const order = req.query.order || -1;
            let categories:any[] = [];
            //find category
            if(req.query.category)
            {
                categories = <any> await ProductService.find_children(+req.query.skip, +req.query.limit, req.query.category)
                    
            }
            let result;
            let count = 0;
            if(categories.length === 0){
                result = <any> await Product.find({name:{$regex: req.query.name || "", $options:"$i"}})
                                        .skip(+req.query.skip)
                                        .limit(+req.query.limit)
                                        .sort([[ sort, order ]])
                                        .exec()
                 count = await Product.count({name:{$regex: req.query.name || "", $options:"$i"}});
            }
            else
            {
                result = <any> await Product.find({name:{$regex: req.query.name || "", $options:"$i"}})
                                        .where('category').in(categories)
                                        .skip(+req.query.skip)
                                        .limit(+req.query.limit)
                                        .sort([[ sort, order ]])
                                        .exec();
                 count = await Product.count({name:{$regex: req.query.name || "", $options:"$i"}}).where('category').in(categories)                
            }
            
        
            res.json({data:result, count: count})
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

    async Length(req: any, res: any){
        try {
            const result = await Product.count();
            console.log(result)
            res.json({status: 200, data: result});
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async best_bider_bide(req: any, res: any){
        try {
            let result = await Product.aggregate([
                { $addFields: { "productID": { $toString: "$_id" }}},
                {
                    $lookup:
                    {
                       
                        from: "auctions",
                        localField:"productID",
                        foreignField: "productID",
                        as: "auction"
                    }
                },
                {$unwind: { path: "$auction", preserveNullAndEmptyArrays: true }},
                {
                    $limit: 4
                },
                {
                    $sort:{"auction.amount_bider_bide": -1}
                },
            ])
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async best_price(req: any, res: any){
        try {
            let result = await Product.aggregate([
                { $addFields: { "productID": { $toString: "$_id" }}},
                {
                    $lookup:
                    {
                       
                        from: "auctions",
                        localField:"productID",
                        foreignField: "productID",
                        as: "auction"
                    }
                },
                {$unwind: { path: "$auction", preserveNullAndEmptyArrays: true }},
                {
                    $limit: 4
                },
                {
                    $sort:{"auction.min_price": -1}
                },
            ])
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async betst_date_bide(req: any, res: any){
        try {
            let result = <any> await Product.find({$where: function() { return (Date.parse(this.date_bid) > (new Date()).getTime() ) }})
                                      .limit(4)
                                      .sort({"date_bid": -1});
            
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getAuctions(req: any, res: any){
        try {
            const result = <any> await Auction.findOne({productID: req.params.productID});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async relatedProducts(req: any, res: any){
        const {productID, category} = req.body;
        try {
            const result = await Product.find({_id: {$nin: productID}, category: category})
                                        .limit(5)
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async seller_products(req: any, res: any){
        const sellerID = req.query.sellerID;
        const skip = req.query.skip;
        const limit = req.query.limit;
        try {
            const result = await Product.aggregate([
                {
                    $match: {seller: sellerID}
                },
                { $addFields: { "productID": { $toString: "$_id" }}},
                {
                    $lookup:
                    {
                       
                        from: "auctions",
                        localField:"productID",
                        foreignField: "productID",
                        as: "auction"
                    }
                },
                {$unwind: { path: "$auction", preserveNullAndEmptyArrays: true }},
                { $addFields: { "holder": { $toObjectId: "$auction.holderID" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"holder",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                }
            ])
            const count = await Product.count({seller: sellerID})
            res.json({data: result, count: count})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}

export default new ProductController;