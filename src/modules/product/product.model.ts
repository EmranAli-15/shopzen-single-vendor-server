import mongoose, { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: Schema.Types.ObjectId,
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
            default: 0,
        },

        brand: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);




// ProductSchema.pre("save", function (next) {
//     if (this.discount && this.original_price) {
//         this.discount_price =
//             this.original_price - (this.original_price * this.discount) / 100;
//     } else {
//         this.discount_price = this.original_price;
//     }
//     next();
// });


export const Product = model('Product', ProductSchema);
