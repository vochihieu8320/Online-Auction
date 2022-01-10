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

    async find_children(skip: any, limit: any, category: any){
        let categories :any[] = []
        const child = <any> await Category.find({name:{$regex:category, $options:"$i"}})
                                                .skip(skip)
                                                .limit(limit);
            for(let i=0;i<child.length;i++){
                if(!child[i].parentID )
                 {
                    let temp = <any>await Category.find({parentID: child[i]._id}).select({ "name": 1, "_id": 1});
                    let _temp = [];
                    for(let i = 0; i < temp.length; i++){
                       _temp.push(temp[i].name);
                    }
                    categories = [...categories, ..._temp]
                }
                else
                {
                    categories.push(child[i].name);
                }
            } 
        return categories;
    }
}

export default new ProductService