"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const route = (0, express_1.Router)();
route.post("/cart/addToCart", cart_controller_1.cartController.saveToCart);
route.delete("/cart/deleteProductFromCart", cart_controller_1.cartController.deleteProductFromCart);
route.get("/cart/myCart/:id", cart_controller_1.cartController.getMyCart);
exports.cartRoutes = route;
//# sourceMappingURL=cart.route.js.map