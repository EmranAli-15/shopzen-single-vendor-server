"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const handleAsync_1 = require("../../utils/handleAsync");
const user_service_1 = require("./user.service");
const loginUser = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await user_service_1.userServices.loginUser(req.body);
    res.status(200).json({
        message: "User login complete.",
        data: result
    });
});
const googleLogin = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await user_service_1.userServices.googleLogin(req.body);
    res.status(200).json({
        message: "User login complete.",
        data: result
    });
});
const createUser = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const result = await user_service_1.userServices.registerUser(req.body);
    res.status(201).json({
        message: "User register complete.",
        data: result
    });
});
const getUser = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await user_service_1.userServices.getUser(id);
    res.status(201).json({
        message: "User retrieved successfull.",
        data: result
    });
});
const updateUser = (0, handleAsync_1.handleAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await user_service_1.userServices.updateUser({ id: id, payload: req.body });
    res.status(201).json({
        message: "User data update successfull.",
        data: result
    });
});
exports.userController = {
    createUser,
    loginUser,
    getUser,
    updateUser,
    googleLogin
};
//# sourceMappingURL=user.controller.js.map