import Category from '../model/category.model';

class CategoryService {
    async check_parent(req: any, res: any, next: any) {
        try {
            const parent = await Category.findById(req.body.parentID)
            next();
            
        } catch (error) {
            res.json({status: 400, error: 'Parent not found'});
        }
    }
}

export default new CategoryService