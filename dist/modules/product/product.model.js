"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    original_price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number
    },
    discount_price: {
        type: Number,
    },
    stock: {
        type: Number,
        default: 10,
    },
    brand: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
// ProductSchema.pre("save", function (next) {
//     if (this.discount && this.original_price) {
//         this.discount_price =
//             this.original_price - (this.original_price * this.discount) / 100;
//     } else {
//         this.discount_price = this.original_price;
//     }
//     next();
// });
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map