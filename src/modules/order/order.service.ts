import AppError from "../../errors/AppError";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: TOrder) => {
    const data = payload;
    type TProduct = {
        product: string;
        quantity: number;
    };

    const { products }: { products: any } = data;

    if (!products || products.length === 0) {
        throw new AppError(400, "You must order at least one product.");
    }

    // Extract IDs
    const productIds = products.map((p: TProduct) => p.product);

    // Fetch products from DB
    const dbProducts = await Product.find({
        _id: { $in: productIds }
    });

    if (dbProducts.length !== products.length) {
        throw new AppError(400, "Some products are invalid or unavailable.");
    }

    // Calculate total amount
    let totalAmount = 0;

    for (const item of products) {
        const product = dbProducts.find(
            p => p._id.toString() === item.product
        );

        if (!product) continue;

        const price = product.discount_price ?? product.original_price;

        totalAmount += price * item.quantity;
    }

    const orderData = {
        userId: data.userId,
        products,
        totalAmount,
        status: [
            {
                orderConfirmed: false,
                time: ""
            },
            {
                packed: false,
                time: ""
            },
            {
                shipped: false,
                time: ""
            },
            {
                outForDelivery: false,
                time: ""
            },
            {
                delivered: false,
                time: ""
            }
        ],
    }
    // Create order
    const order = await Order.create(orderData);
    return order
};


const getMyOrders = async (id: string) => {
    const result = Order.find({ userId: id }).populate("products.product", "name image discount_price");
    return result
    console.log(result)
}


export const orderServices = {
    createOrder,
    getMyOrders
};