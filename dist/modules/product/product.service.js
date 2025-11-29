"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = async (payload) => {
    const data = payload;
    data.discount_price = data.original_price - ((data.original_price * data.discount) / 100);
    const result = await product_model_1.Product.create(data);
    return result;
};
const getSingleProduct = async (id) => {
    const result = await product_model_1.Product.findById(id).populate("category");
    return result;
};
const getProductsByCategory = async ({ id, page }) => {
    const limit = 20;
    const result = await product_model_1.Product.find({ category: id }).skip(page * limit).limit(limit).populate("category");
    return result;
};
const updateProduct = async ({ id, payload }) => {
    const data = payload;
    const { discount, original_price } = data;
    const getProduct = await product_model_1.Product.findById(id);
    if (discount && original_price) {
        data.discount_price = data.original_price - ((data.original_price * data.discount) / 100);
    }
    else if (original_price && getProduct) {
        data.discount_price = data.original_price - ((data.original_price * getProduct.discount) / 100);
    }
    else if (discount && getProduct) {
        data.discount_price = getProduct.original_price - ((getProduct.original_price * discount) / 100);
    }
    const result = await product_model_1.Product.findByIdAndUpdate(id, { $set: data }, { new: true });
    return result;
};
const deleteProduct = async (id) => {
    const result = await product_model_1.Product.findByIdAndDelete(id);
    return result;
};
const getAllProduct = async ({ skip, limit }) => {
    const lim = limit || 20;
    const skp = skip || 0;
    const result = await product_model_1.Product.find().skip(skp).limit(lim).populate("category");
    return result;
};
const searchProducts = async (text) => {
    const result = await product_model_1.Product.aggregate([
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
};
exports.productServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    searchProducts
};
//# sourceMappingURL=product.service.js.map