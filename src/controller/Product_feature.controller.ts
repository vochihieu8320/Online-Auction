import Product_feature from '../model/product_feature.model';

class ProductFeatureController {
    async create(req: any, res: any)
    {
        try {
            await Product_feature.create(req.body);
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

    async index(req: any, res:any) {
        try {
            const productID = req.params.productID;
            const result = await Product_feature.find({productID: productID});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

}

export default new ProductFeatureController