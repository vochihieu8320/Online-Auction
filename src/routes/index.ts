import userRouter from './user.route';
import productRouter from './product.route';
import categorRouter from './category.route';
import manageRouter from './manageUser.route'


function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/product',productRouter)
    app.use('/category',categorRouter)
    app.use('/manageUser',manageRouter)
}

export default route;