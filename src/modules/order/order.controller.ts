import { Request, Response } from "express";
import { handleAsync } from "../../utils/handleAsync";
import { orderServices } from "./order.service";

const createOrder = handleAsync(
    async (req: Request, res: Response) => {
        const result = await orderServices.createOrder(req.body);

        res.status(201).json({
            message: "Order created successfull.",
            data: result
        })
    }
);

const getMyorders = handleAsync(
    async (req: Request, res: Response) => {
        const { userId } = req.params;
        const result = await orderServices.getMyOrders(userId as string);

        res.status(201).json({
            message: "Orders retrieved successfull.",
            data: result
        })
    }
);

export const orderController = {
    createOrder,
    getMyorders
};