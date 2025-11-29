import { Request, Response } from "express";
export declare const cartController: {
    saveToCart: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteProductFromCart: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getMyCart: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=cart.controller.d.ts.map