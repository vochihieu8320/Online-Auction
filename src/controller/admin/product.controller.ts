import Product from '../../model/product.model';

class ProductController{
    async index(req :any, res: any)
    {
        try {
            const {skip, limit} = req.query;
            const result = await Product.aggregate([
                { "$addFields": { "userID": { "$toObjectId": "$seller" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"userID",
                        foreignField: "_id",
                        as: "owner"
                    }
                },
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                },
                {
                    $sort: {"updatedAt": -1}
                }
            ])
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
        

    }

    async delete(req: any, res: any){
        try {
            await Product.findByIdAndDelete(req.params.productID);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}
export default new ProductController