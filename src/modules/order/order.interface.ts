import { Types } from "mongoose"

export type TOrderStatus =
    | "pending"
    | "confirmed"
    | "packed"
    | "shipped"
    | "out_for_delivery"
    | "delivered";

export type TOrder = {
    products: [],
    totalAmount: number,
    userId: Types.ObjectId,

    status: TOrderStatus
}