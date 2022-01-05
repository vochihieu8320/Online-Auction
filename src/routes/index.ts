import userRouter from './user.route';
import productRouter from './product.route';
import categorRouter from './category.route'


function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/product',productRouter)
    app.use('/category',categorRouter)
}

export default route;