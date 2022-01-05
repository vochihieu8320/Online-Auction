import Category from '../model/category.model';

class ProductService {
    async check_category(req: any, res: any, next: any) {
        try {
            await Category.findById(req.body.category);
            next();
        } catch (error) {
            res.json({status: 400, error: 'Category not found'});
        }
    }

}
export default new ProductService