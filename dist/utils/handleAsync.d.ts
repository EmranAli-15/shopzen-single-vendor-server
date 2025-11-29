import { NextFunction, Request, Response } from "express";
export declare const handleAsync: (fn: Function) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=handleAsync.d.ts.map