"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const handleAsync_1 = require("../../utils/handleAsync");
const cart_service_1 = require("./cart.service");
const saveToCart = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await cart_service_1.cartService.saveProduct(req.body);
    res.status(201).json({
        message: "Product added to cart.",
        data: result
    });
});
const deleteProductFromCart = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { userId, productId } = req.body;
    const result = await cart_service_1.cartService.deleteProductFromCart({ userId, productId });
    res.status(200).json({
        message: "Product removed from cart.",
        data: result
    });
});
const getMyCart = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await cart_service_1.cartService.getMyCart(id);
    res.status(200).json({
        message: "Cart retrieved.",
        data: result
    });
});
exports.cartController = {
    saveToCart,
    deleteProductFromCart,
    getMyCart,
};
//# sourceMappingURL=cart.controller.js.map