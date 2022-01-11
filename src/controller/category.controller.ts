import Category from '../model/category.model';

class CategoryController{
    async create(req: any, res: any){
        try {
            const data = await Category.create(req.body);
            res.json({status: 200, data: data});
        } catch (error) {
            console.log(error);
            res.sendStatus(400)        
        }
    }

    async update(req: any, res: any){
        try {
            const data = await Category.findByIdAndUpdate(req.params.categoryID, req.body, { returnOriginal: false });
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

    async index(req: any, res: any){
        try {
            const {skip, limit} = req.query;
            const data = await Category.aggregate([
                {
                    $match: {parentID: null}
                },
                { "$addFields": { "parent": { "$toString": "$_id" }}},
                {
                    $lookup:{
                        from: "categories",
                        localField:"parent",
                        foreignField: "parentID",
                        as: "childs"
                    }
                },
                {
                    $skip: +skip,
                },
                {
                    $limit: +limit
                }
            ])     
            res.json(data)
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
       
    }

    async show(req: any, res: any){
        try {
            const categoryID = req.params.categoryID;
            const result = await Category.findById(categoryID);
            res.json({status: 200, data: result})
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async delete(req: any, res: any){
        try {
            // await Category.deleteOne({_id: req.params.categoryID});
            // const child = await Category.find({parentID: req.params.categoryID});
            // for(let i = 0; i < child.length; i++){
            //     await Category.deleteOne({_id: child[i]._id})
            // }
            const child = await Category.find({parentID: req.params.categoryID});
            if(child.length > 0){

            }
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

}

export default new CategoryController