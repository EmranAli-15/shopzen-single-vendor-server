import { NextFunction, Request, Response } from "express";
import { jwtDecode } from "jwt-decode";
import AppError from "../errors/AppError";
import { handleAsync } from "../utils/handleAsync";

type TRole = "admin" | "user";

export const auth = (role: TRole) => {
    return handleAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const token = req.headers.token as string;

            if (!token) { 
                throw new AppError(403, "Not authorized. token is missing.")
            }

            const decoded = jwtDecode(token) as { role: string };

            if (decoded.role !== role) { 
                throw new AppError(403, "Not authorized.")
            }

            next();
        }
    )
}