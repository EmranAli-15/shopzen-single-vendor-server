import { Request, Response } from "express";
import { handleAsync } from "../../utils/handleAsync";
import { categoryServices } from "./category.services";

const createCategory = handleAsync(
    async (req: Request, res: Response) => {
        const result = await categoryServices.createCategory(req.body);

        res.status(201).json({
            message: "Category created successfull.",
            data: result
        })
    }
);

const updateCategory = handleAsync(
    async (req: Request, res: Response) => {
        const { categoryId } = req.params;
        const result = await categoryServices.updateCategory({ id: categoryId as string, payload: req.body });

        res.status(201).json({
            message: "Category updated successfull.",
            data: result
        })
    }
);

const getCategories = handleAsync(
    async (req: Request, res: Response) => {
        const result = await categoryServices.getCategories();

        res.status(201).json({
            message: "Categories retrieved successfull.",
            data: result
        })
    }
);

const getSingleCategory = handleAsync(
    async (req: Request, res: Response) => {
        const { categoryId } = req.params;
        const result = await categoryServices.getSingleCategory(categoryId as string);

        res.status(201).json({
            message: "Category retrieved successfull.",
            data: result
        })
    }
);


export const categoryController = {
    createCategory,
    updateCategory,
    getCategories,
    getSingleCategory
}