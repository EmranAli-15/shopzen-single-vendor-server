import { Request, Response } from "express";
import { handleAsync } from "../../utils/handleAsync";
import { productServices } from "./product.service";
import { number } from "joi";

const createProduct = handleAsync(
    async (req: Request, res: Response) => {
        const result = await productServices.createProduct(req.body);

        res.status(201).json({
            message: "Product created successfull.",
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
    getAllProducts
}