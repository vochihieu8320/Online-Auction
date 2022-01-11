import Category from '../model/category.model';
import Product from '../model/product.model';

class CategoryService {
    async check_parent(req: any, res: any, next: any) {
        try {
            const parent = await Category.findById(req.body.parentID)
            next();
            
        } catch (error) {
            res.json({status: 400, error: 'Parent not found'});
        }
    }

    delete(category: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.findOne({category: category});
                (product)? resolve(false) : resolve(true);
            } catch (error) {
                console.log(error);
                resolve(false);
            }
        })    
    }
}

export default new CategoryService