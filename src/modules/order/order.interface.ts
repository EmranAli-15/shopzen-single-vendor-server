import { Types } from "mongoose"

export type TOrder = {
    products: [],
    totalAmount: number,
    userId: Types.ObjectId,
    status: [
        {
            orderConfirmed: false,
            time: string
        },
        {
            packed: false,
            time: string
        },
        {
            shipped: false,
            time: string
        },
        {
            outForDelivery: false,
            time: string
        },
        {
            delivered: false,
            time: string
        },
    ]
}