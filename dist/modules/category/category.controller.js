"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const handleAsync_1 = require("../../utils/handleAsync");
const category_services_1 = require("./category.services");
const createCategory = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await category_services_1.categoryServices.createCategory(req.body);
    res.status(201).json({
        message: "Category created successfull.",
        data: result
    });
});
const updateCategory = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { categoryId } = req.params;
    const result = await category_services_1.categoryServices.updateCategory({ id: categoryId, payload: req.body });
    res.status(201).json({
        message: "Category updated successfull.",
        data: result
    });
});
const deleteCategory = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { categoryId } = req.params;
    const result = await category_services_1.categoryServices.deleteCategory(categoryId);
    res.status(200).json({
        message: "Category deleted successfull.",
        data: result
    });
});
const getCategories = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await category_services_1.categoryServices.getCategories();
    res.status(201).json({
        message: "Categories retrieved successfull.",
        data: result
    });
});
const getSingleCategory = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { categoryId } = req.params;
    const result = await category_services_1.categoryServices.getSingleCategory(categoryId);
    res.status(201).json({
        message: "Category retrieved successfull.",
        data: result
    });
});
exports.categoryController = {
    createCategory,
    updateCategory,
    getCategories,
    getSingleCategory,
    deleteCategory
};
//# sourceMappingURL=category.controller.js.map