import { Request, Response } from "express";
import { handleAsync } from "../../utils/handleAsync";
import { userServices } from "./user.service";


const loginUser = handleAsync(
    async (req: Request, res: Response) => {
        const result = await userServices.loginUser(req.body);

        res.status(200).json({
            message: "User login complete.",
            data: result
        })
    }
);

// const googleLogin = handleAsync(
//     async (req: Request, res: Response) => {
//         const result = await userService.googleLogin(req.body);

//         res.status(200).json({
//             message: "User login complete.",
//             data: result
//         })
//     }
// );

const createUser = handleAsync(
    async (req: Request, res: Response) => {
        const result = await userServices.registerUser(req.body);

        res.status(201).json({
            message: "User register complete.",
            data: result
        })
    }
);

const getUser = handleAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await userServices.getUser(id as string);

        res.status(201).json({
            message: "User retrieved successfull.",
            data: result
        })
    }
);

const updateUser = handleAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await userServices.updateUser({ id: id as string, payload: req.body });

        res.status(201).json({
            message: "User data update successfull.",
            data: result
        })
    }
);



export const userController = {
    createUser,
    loginUser,
    getUser,
    updateUser
}