"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const handleAsync_1 = require("../../utils/handleAsync");
const order_service_1 = require("./order.service");
const createOrder = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await order_service_1.orderServices.createOrder(req.body);
    res.status(201).json({
        message: "Order created successfull.",
        data: result
    });
});
const getMyorders = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { userId } = req.params;
    const result = await order_service_1.orderServices.getMyOrders(userId);
    res.status(200).json({
        message: "Orders retrieved successfull.",
        data: result
    });
});
const updateOrder = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { orderId } = req.params;
    const result = await order_service_1.orderServices.updateOrder({ orderId: orderId, status: req.body.status });
    res.status(200).json({
        message: "Orders updated successfull.",
        data: result
    });
});
exports.orderController = {
    createOrder,
    getMyorders,
    updateOrder
};
//# sourceMappingURL=order.controller.js.map