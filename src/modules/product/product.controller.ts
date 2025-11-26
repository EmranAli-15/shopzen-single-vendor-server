import { Request, Response } from "express";
import { handleAsync } from "../../utils/handleAsync";
import { productServices } from "./product.service";

const createProduct = handleAsync(
    async (req: Request, res: Response) => {
        const result = await productServices.createProduct(req.body);

        res.status(201).json({
            message: "Product created successfull.",
            data: result
        })
    }
);

const getSingleProduct = handleAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;

        const result = await productServices.getSingleProduct(productId as string);

        res.status(200).json({
            message: "Product retrieved successfull.",
            data: result
        })
    }
);

const getProductsByCategory = handleAsync(
    async (req: Request, res: Response) => {
        const { categoryId } = req.params;
        const { page } = req.query;

        const result = await productServices.getProductsByCategory({ id: categoryId as string, page: Number(page) - 1 });

        res.status(200).json({
            message: "Category products retrieved.",
            data: result
        });
    }
);

const searchProducts = handleAsync(
    async (req: Request, res: Response) => {
        const { text } = req.query;
        const result = await productServices.searchProducts(text as string);

        res.status(200).json({
            message: "Products searched.",
            data: result
        });
    }
);

const updateProduct = handleAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;
        const data = req.body;

        const result = await productServices.updateProduct({ id: productId as string, payload: data });

        res.status(200).json({
            message: "Product update successfull.",
            data: result
        })
    }
);

const deleteProduct = handleAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;

        const result = await productServices.deleteProduct(productId as string);

        res.status(200).json({
            message: "Product deleted successfull.",
            data: result
        })
    }
);

const getAllProducts = handleAsync(
    async (req: Request, res: Response) => {
        const { page, limit } = req.query;

        const pageNum = Number(page)
        const limitNum = Number(limit)

        const result = await productServices.getAllProduct({ skip: pageNum, limit: limitNum });

        res.status(201).json({
            message: "Products retrieved successfull.",
            data: result
        })
    }
);

export const productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    searchProducts
}