import { NextFunction, Request, Response } from "express";
type TRole = "admin" | "user";
export declare const auth: (role: TRole) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=auth.d.ts.map