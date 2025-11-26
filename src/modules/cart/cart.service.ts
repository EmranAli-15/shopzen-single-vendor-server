import AppError from "../../errors/AppError";
import { Cart } from "./cart.model";

const saveProduct = async (payload: { userId: string, productId: string }) => {
    const isExist = await Cart.exists({ userId: payload.userId as any, productId: payload.productId as any });
    if (isExist) {
        throw new AppError(404, "Product is exist in your cart.")
    }
    const result = await Cart.create(payload as any);
    return result;
};

const deleteProductFromCart = async (payload: { userId: string, productId: string }) => {
    const result = await Cart.deleteOne({ userId: payload.userId as any, productId: payload.productId as any });
    return result;
};

const getMyCart = async (id: string) => {
    const result = await Cart.find({ userId: id as any }).populate("productId", "name image price stock");
    return result
};


export const cartService = {
    saveProduct,
    deleteProductFromCart,
    getMyCart
}