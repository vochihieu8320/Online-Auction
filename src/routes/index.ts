import userRouter from './user.route';
import productRouter from './product.route';
import categorRouter from './category.route'


function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/api/product',productRouter)
    app.use('api/category',categorRouter)
}

export default route;