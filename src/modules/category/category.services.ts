import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: TCategory) => {
    const result = Category.create(payload);
    return result
};

const updateCategory = async ({ id, payload }: { id: string, payload: TCategory }) => {
    const result = Category.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result
};

const getCategories = async () => {
    const result = Category.find();
    return result
};

const getSingleCategory = async (id: string) => {
    const result = Category.findById(id);
    return result
};

export const categoryServices = {
    createCategory,
    updateCategory,
    getCategories,
    getSingleCategory
}