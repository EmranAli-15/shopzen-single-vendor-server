"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const cart_model_1 = require("./cart.model");
const saveProduct = async (payload) => {
    const isExist = await cart_model_1.Cart.exists({ userId: payload.userId, productId: payload.productId });
    if (isExist) {
        throw new AppError_1.default(404, "Product is exist in your cart.");
    }
    const result = await cart_model_1.Cart.create(payload);
    return result;
};
const deleteProductFromCart = async (payload) => {
    const result = await cart_model_1.Cart.deleteOne({ userId: payload.userId, productId: payload.productId });
    return result;
};
const getMyCart = async (id) => {
    const result = await cart_model_1.Cart.find({ userId: id }).populate("productId", "name image price stock");
    return result;
};
exports.cartService = {
    saveProduct,
    deleteProductFromCart,
    getMyCart
};
//# sourceMappingURL=cart.service.js.map