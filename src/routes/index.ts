import userRouter from './user.route';
import auctionRouter from './aution.route';
import bideRouter from './bide.route';
function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/auctions', auctionRouter);
    app.use('/bides', bideRouter);
}

export default route;