"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: "Product"
    }
}, {
    timestamps: true
});
exports.Cart = (0, mongoose_1.model)("Cart", cartSchema);
//# sourceMappingURL=cart.model.js.map