"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middlewares/validator");
const auth_1 = require("../../middlewares/auth");
const order_validation_1 = require("./order.validation");
const order_controller_1 = require("./order.controller");
const route = express_1.default.Router();
route.post("/order/createOrder", (0, validator_1.validator)(order_validation_1.orderValidation.createOrder), order_controller_1.orderController.createOrder);
route.get("/order/getMyOrders/:userId", order_controller_1.orderController.getMyorders);
route.patch("/order/updateOrder/:orderId", (0, auth_1.auth)("admin"), order_controller_1.orderController.updateOrder);
exports.orderRoutes = route;
//# sourceMappingURL=order.route.js.map