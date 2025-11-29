"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const category_model_1 = require("./category.model");
const createCategory = async (payload) => {
    const result = await category_model_1.Category.create(payload);
    return result;
};
const updateCategory = async ({ id, payload }) => {
    const result = await category_model_1.Category.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result;
};
const deleteCategory = async (id) => {
    const result = await category_model_1.Category.findByIdAndDelete(id);
    return result;
};
const getCategories = async () => {
    const result = await category_model_1.Category.find();
    return result;
};
const getSingleCategory = async (id) => {
    const result = await category_model_1.Category.findById(id);
    return result;
};
exports.categoryServices = {
    createCategory,
    updateCategory,
    getCategories,
    getSingleCategory,
    deleteCategory
};
//# sourceMappingURL=category.services.js.map