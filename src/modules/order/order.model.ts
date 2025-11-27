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
    },
    {
        timestamps: true
    }
);

export const Order = model('Order', orderSchema);