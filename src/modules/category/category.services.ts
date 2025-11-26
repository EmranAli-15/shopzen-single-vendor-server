import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: TCategory) => {
    const result = await Category.create(payload);
    return result
};

const updateCategory = async ({ id, payload }: { id: string, payload: TCategory }) => {
    const result = await Category.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result
};

const deleteCategory = async (id: string) => {
    const result = await Category.findByIdAndDelete(id);
    return result
}

const getCategories = async () => {
    const result = await Category.find();
    return result
};

const getSingleCategory = async (id: string) => {
    const result = await Category.findById(id);
    return result
};

export const categoryServices = {
    createCategory,
    updateCategory,
    getCategories,
    getSingleCategory,
    deleteCategory
}