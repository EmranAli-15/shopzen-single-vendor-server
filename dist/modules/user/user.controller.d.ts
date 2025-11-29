import { Request, Response } from "express";
export declare const userController: {
    createUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    loginUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    googleLogin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=user.controller.d.ts.map