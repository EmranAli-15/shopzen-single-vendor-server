import { Request, Response } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getMyorders: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateOrder: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=order.controller.d.ts.map