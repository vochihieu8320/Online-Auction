import Product from '../model/product.model';
import Category from '../model/category.model'

class ProductService {
    checkCategory(categoryID: any){
        return new Promise(async(resolve, reject) => {
            try {
                await Category.findById(categoryID);
                resolve(true);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

}

export default new ProductService