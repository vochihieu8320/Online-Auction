"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const aution_route_1 = __importDefault(require("./aution.route"));
const bide_route_1 = __importDefault(require("./bide.route"));
const product_route_1 = __importDefault(require("./product.route"));
<<<<<<< HEAD
const upload_route_1 = __importDefault(require("./upload.route"));
=======
const category_route_1 = __importDefault(require("./category.route"));
>>>>>>> 6186f04e340e4e24af49c0895758d4625cdaea05
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/auctions', aution_route_1.default);
    app.use('/bides', bide_route_1.default);
    app.use('/product', product_route_1.default);
<<<<<<< HEAD
    app.use('/uploads', upload_route_1.default);
=======
    app.use('/category', category_route_1.default);
>>>>>>> 6186f04e340e4e24af49c0895758d4625cdaea05
}
exports.default = route;
