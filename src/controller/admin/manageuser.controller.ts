import userService from '../../service/user.service'
import User from '../../model/user.model';


class ManageController
{
    async List(req: any, res: any,next:any)
    {
        try{
            const list = await User.find()
            res.json({
                users:list
            })
            }
        catch(err){
            console.log(err)
        }
    }
    async Register(req: any, res: any)
    {
        try{
            // const { error } = validate.regisValidate(req.body);
            // if (error)  return res.status(400).send(error.details[0].message);
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