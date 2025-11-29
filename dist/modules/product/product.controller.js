"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const handleAsync_1 = require("../../utils/handleAsync");
const product_service_1 = require("./product.service");
const createProduct = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await product_service_1.productServices.createProduct(req.body);
    res.status(201).json({
        message: "Product created successfull.",
        data: result
    });
});
const getSingleProduct = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { productId } = req.params;
    const result = await product_service_1.productServices.getSingleProduct(productId);
    res.status(200).json({
        message: "Product retrieved successfull.",
        data: result
    });
});
const getProductsByCategory = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { categoryId } = req.params;
    const { page } = req.query;
    const result = await product_service_1.productServices.getProductsByCategory({ id: categoryId, page: Number(page) - 1 });
    res.status(200).json({
        message: "Category products retrieved.",
        data: result
    });
});
const searchProducts = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { text } = req.query;
    const result = await product_service_1.productServices.searchProducts(text);
    res.status(200).json({
        message: "Products searched.",
        data: result
    });
});
const updateProduct = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { productId } = req.params;
    const data = req.body;
    const result = await product_service_1.productServices.updateProduct({ id: productId, payload: data });
    res.status(200).json({
        message: "Product update successfull.",
        data: result
    });
});
const deleteProduct = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { productId } = req.params;
    const result = await product_service_1.productServices.deleteProduct(productId);
    res.status(200).json({
        message: "Product deleted successfull.",
        data: result
    });
});
const getAllProducts = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { page, limit } = req.query;
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const result = await product_service_1.productServices.getAllProduct({ skip: pageNum, limit: limitNum });
    res.status(201).json({
        message: "Products retrieved successfull.",
        data: result
    });
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    searchProducts
};
//# sourceMappingURL=product.controller.js.map