"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    products: {
        type: [{
                product: {
                    type: mongoose_1.Types.ObjectId,
                    ref: "Product"
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }],
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: [
            "pending",
            "confirmed",
            "packed",
            "shipped",
            "out_for_delivery",
            "delivered"
        ],
        default: "pending"
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=order.model.js.map