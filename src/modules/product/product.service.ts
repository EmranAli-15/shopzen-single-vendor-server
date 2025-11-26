import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
    const data = payload;

    data.discount_price = data.original_price - ((data.original_price * data.discount) / 100);
    const result = await Product.create(data);
    return result
};

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id).populate("category");
    return result
};

const getProductsByCategory = async ({ id, page }: { id: string, page: number }) => {
    const limit = 20;
    const result = await Product.find({ category: id }).skip(page * limit).limit(limit).populate("category");
    return result;
};

const updateProduct = async ({ id, payload }: { id: string, payload: TProduct }) => {

    const data = payload;
    const { discount, original_price } = data;

    const getProduct = await Product.findById(id);

    if (discount && original_price) {
        data.discount_price = data.original_price - ((data.original_price * data.discount) / 100);
    }
    else if (original_price && getProduct) {
        data.discount_price = data.original_price - ((data.original_price * getProduct.discount) / 100);
    }
    else if (discount && getProduct) {
        data.discount_price = getProduct.original_price - ((getProduct.original_price * discount) / 100);
    }

    const result = await Product.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
    );
    return result
};

const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result
};

const getAllProduct = async ({ skip, limit }: { skip: number, limit: number }) => {
    const lim = limit || 20;
    const skp = skip || 0;
    const result = await Product.find().skip(skp).limit(lim).populate("category");
    return result
};

const searchProducts = async (text: string) => {

    const result = await Product.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "categoryData"
            }
        },
        { $unwind: "$categoryData" },
        {
            $match: {
                $or: [
                    { name: { $regex: text, $options: "i" } },
                    { "categoryData.name": { $regex: text, $options: "i" } }
                ]
            }
        }
    ]);

    return result;
}


export const productServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    searchProducts
}