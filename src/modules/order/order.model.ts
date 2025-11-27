import { model, Schema, Types } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
    {
        products: {
            type: [{
                product: {
                    type: Types.ObjectId,
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
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: [],
            required: false
        },
        totalAmount: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Order = model('Order', orderSchema);