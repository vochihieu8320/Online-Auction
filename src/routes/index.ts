import userRouter from './user.route';
import auctionRouter from './aution.route';
import bideRouter from './bide.route';
import productRouter from './product.route';
import uploadRouter from './upload.route';
import categoryRouter from './category.route';
import swaggerRouter from './swagger.route';
const swaggerUi = require('swagger-ui-express');

function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/auctions', auctionRouter);
    app.use('/bides', bideRouter);
    app.use('/products',productRouter);
    app.use('/uploads', uploadRouter);
    app.use('/categories', categoryRouter);
    app.use('/api-docs', swaggerUi.serve, swaggerRouter);
}

export default route;