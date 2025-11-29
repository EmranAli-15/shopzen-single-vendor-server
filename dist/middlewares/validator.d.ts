import { NextFunction, Request, Response } from "express";
import Joi from "joi";
export declare const validator: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=validator.d.ts.map