import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
    const data = payload;

    data.discount_price = data.original_price - ((data.original_price * data.discount) / 100);
    const result = Product.create(data);
    return result
};

const getAllProduct = async ({ skip, limit }: { skip: number, limit: number }) => {
    const lim = limit || 20;
    const skp = skip || 0;
    const result = Product.find().skip(skp).limit(lim).populate("category");
    return result
};


export const productServices = {
    createProduct,
    getAllProduct
}