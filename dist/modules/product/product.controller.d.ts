import { Request, Response } from "express";
export declare const productControllers: {
    createProduct: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllProducts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getSingleProduct: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateProduct: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteProduct: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getProductsByCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    searchProducts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=product.controller.d.ts.map