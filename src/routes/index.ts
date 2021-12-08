import userRouter from './user.route';
import productRouter from './product.route';


function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/product',productRouter)
}

export default route;