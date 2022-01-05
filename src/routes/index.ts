import userRouter from './user.route';
import auctionRouter from './aution.route';
import bideRouter from './bide.route';
import productRouter from './product.route';
import uploadRouter from './upload.route';
import categoryRouter from './category.route';
function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/auctions', auctionRouter);
    app.use('/bides', bideRouter);
    app.use('/product',productRouter);
    app.use('/uploads', uploadRouter);
    app.use('/categories', categoryRouter);
}

export default route;