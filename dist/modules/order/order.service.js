"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = async (payload) => {
    const data = payload;
    const { products } = data;
    if (!products || products.length === 0) {
        throw new AppError_1.default(400, "You must order at least one product.");
    }
    // Extract IDs
    const productIds = products.map((p) => p.product);
    // Fetch products from DB
    const dbProducts = await product_model_1.Product.find({
        _id: { $in: productIds }
    });
    if (dbProducts.length !== products.length) {
        throw new AppError_1.default(400, "Some products are invalid or unavailable.");
    }
    // Calculate total amount
    let totalAmount = 0;
    for (const item of products) {
        const product = dbProducts.find(p => p._id.toString() === item.product);
        if (!product)
            continue;
        const price = product.discount_price ?? product.original_price;
        totalAmount += price * item.quantity;
    }
    const orderData = {
        userId: data.userId,
        products,
        totalAmount,
        status: "pending"
    };
    // Create order
    const order = await order_model_1.Order.create(orderData);
    return order;
};
const getMyOrders = async (id) => {
    const result = await order_model_1.Order.find({ userId: id }).populate("products.product", "name image discount_price");
    return result;
};
const updateOrder = async ({ orderId, status }) => {
    const getOrder = await order_model_1.Order.findById(orderId);
    let updatedStatus;
    if (getOrder) {
        if (status == "confirmed")
            updatedStatus = 'confirmed';
        else if (status == "packed")
            updatedStatus = 'packed';
        else if (status == "shipped")
            updatedStatus = 'shipped';
        else if (status == "out_for_delivery")
            updatedStatus = 'out_for_delivery';
        else if (status == "delivered")
            updatedStatus = 'delivered';
    }
    ;
    const result = await order_model_1.Order.findByIdAndUpdate(orderId, { $set: { status: updatedStatus } }, { new: true });
    return result;
};
exports.orderServices = {
    createOrder,
    getMyOrders,
    updateOrder
};
//# sourceMappingURL=order.service.js.map