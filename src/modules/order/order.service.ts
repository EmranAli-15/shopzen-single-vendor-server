import { any } from "joi";
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
        status: "pending"
    }

    // Create order
    const order = await Order.create(orderData);
    return order
};


const getMyOrders = async (id: string) => {
    const result = await Order.find({ userId: id }).populate("products.product", "name image discount_price");
    return result
}

const updateOrder = async ({ orderId, status }: { orderId: string, status: string }) => {
    const getOrder = await Order.findById(orderId);

    let updatedStatus;
    if (getOrder) {
        if (status == "confirmed") updatedStatus = 'confirmed';
        else if (status == "packed") updatedStatus = 'packed';
        else if (status == "shipped") updatedStatus = 'shipped';
        else if (status == "out_for_delivery") updatedStatus = 'out_for_delivery';
        else if (status == "delivered") updatedStatus = 'delivered';
    };

    const result = await Order.findByIdAndUpdate(
        orderId,
        { $set: { status: updatedStatus } },
        { new: true }
    );
    return result;
}


export const orderServices = {
    createOrder,
    getMyOrders,
    updateOrder
};