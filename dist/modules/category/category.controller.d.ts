import { Request, Response } from "express";
export declare const categoryController: {
    createCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getCategories: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getSingleCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=category.controller.d.ts.map