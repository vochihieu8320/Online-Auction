"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
<<<<<<< HEAD
const aution_route_1 = __importDefault(require("./aution.route"));
const bide_route_1 = __importDefault(require("./bide.route"));
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/auctions', aution_route_1.default);
    app.use('/bides', bide_route_1.default);
=======
const product_route_1 = __importDefault(require("./product.route"));
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/product', product_route_1.default);
>>>>>>> 29cd0c38b5b5de6735aab6ff93a630f4c9f3ad00
}
exports.default = route;
