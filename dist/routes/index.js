"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const aution_route_1 = __importDefault(require("./aution.route"));
const bide_route_1 = __importDefault(require("./bide.route"));
const product_route_1 = __importDefault(require("./product.route"));
const upload_route_1 = __importDefault(require("./upload.route"));
const index_route_1 = __importDefault(require("./admin/index.route"));
const category_route_1 = __importDefault(require("./category.route"));
const otp_route_1 = __importDefault(require("./otp.route"));
const inbox_route_1 = __importDefault(require("./inbox.route"));
const auction_history_route_1 = __importDefault(require("./auction_history.route"));
const feeback_route_1 = __importDefault(require("./feeback.route"));
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/auctions', aution_route_1.default);
    app.use('/bides', bide_route_1.default);
    app.use('/products', product_route_1.default);
    app.use('/uploads', upload_route_1.default);
    app.use('/admin', index_route_1.default);
    app.use('/categories', category_route_1.default);
    app.use('/otp', otp_route_1.default);
    app.use('/inboxes', inbox_route_1.default);
    app.use('/auction-history', auction_history_route_1.default);
    app.use('/feedbacks', feeback_route_1.default);
}
exports.default = route;
