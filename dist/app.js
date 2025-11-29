"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/user/user.route");
const category_route_1 = require("./modules/category/category.route");
const product_route_1 = require("./modules/product/product.route");
const cart_route_1 = require("./modules/cart/cart.route");
const order_route_1 = require("./modules/order/order.route");
exports.app = (0, express_1.default)();
exports.port = process.env.PORT || 5000;
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: ['https://bookworld-client.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
// ROUTES
exports.app.use('/api', user_route_1.userRoutes);
exports.app.use('/api', category_route_1.categoryRoutes);
exports.app.use('/api', product_route_1.productRoutes);
exports.app.use('/api', cart_route_1.cartRoutes);
exports.app.use('/api', order_route_1.orderRoutes);
// ROUTES
exports.app.get('/', (req, res) => {
    res.send('Hello from Express with TypeScript!');
});
//# sourceMappingURL=app.js.map