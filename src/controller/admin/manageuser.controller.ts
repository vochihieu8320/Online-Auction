import userService from '../../service/user.service'
import User from '../../model/user.model';


class ManageController
{
    async List(req: any, res: any,next:any)
    {
        try {
            const {skip, limit} = req.query;
            const result = await User.aggregate([
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
    async Register(req: any, res: any)
    {
        try{
            const hashed = await userService.hashpass(req.body.password);
            const user=await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashed,
                user_type: req.body.user_type
            })

            res.json({data:user,status: 200})
        }catch(err){
            console.log(err);
        }    
    }
    async Delete(req: any, res: any)
    {
        let _id = req.params.id;
        try{
            await User.deleteOne({_id:_id})
            res.json({
                save:true,
                status:200
            })
        }catch(error){
            console.log(error);
            res.json({
                save:false,
                status:400
            })
        }
    }
}

export default new ManageController;