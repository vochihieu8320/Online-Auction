import userRouter from './user.route';
import auctionRouter from './aution.route';
import bideRouter from './bide.route';
import productRouter from './product.route';
import uploadRouter from './upload.route';
import manageRouter from './admin/index.route';
import categoryRouter from './category.route';
import otpRouter from './otp.route';
import inboxRouter from './inbox.route';
import auction_historyRouter from './auction_history.route'
function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/auctions', auctionRouter);
    app.use('/bides', bideRouter);
    app.use('/products',productRouter);
    app.use('/uploads', uploadRouter);
    app.use('/admin',manageRouter);
    app.use('/categories',categoryRouter);
    app.use('/otp',otpRouter);
    app.use('/inboxes', inboxRouter);
    app.use('/auction-history', auction_historyRouter)
}

export default route;