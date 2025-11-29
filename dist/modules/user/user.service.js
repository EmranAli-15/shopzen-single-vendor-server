"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createAccesstoken_1 = require("../../utils/createAccesstoken");
const hashing_1 = require("../../utils/hashing");
const user_model_1 = require("./user.model");
const loginUser = async (payload) => {
    const isUserExist = await user_model_1.User.findOne({ email: payload.email });
    if (!isUserExist) {
        throw new AppError_1.default(404, 'User not exist.');
    }
    ;
    const passwordDecoded = await (0, hashing_1.decryptHash)(payload.password, isUserExist.password);
    if (!passwordDecoded) {
        throw new AppError_1.default(404, 'Password incorrect.');
    }
    ;
    const jwtPayload = {
        name: isUserExist.fullName,
        email: payload.email,
        role: isUserExist.role,
        address: isUserExist.address,
        phone: isUserExist.phone,
        photo: isUserExist.image,
        userId: isUserExist?._id,
    };
    const accessToken = (0, createAccesstoken_1.createAccessToken)(jwtPayload);
    return accessToken;
};
const googleLogin = async (payload) => {
    const { email, fullName, image } = payload;
    const isExist = await user_model_1.User.findOne({ email });
    if (!isExist) {
        const password = "123456";
        const data = { email, fullName, image, password, role: "user" };
        data.password = await (0, hashing_1.makeHash)(data.password);
        const createUser = await user_model_1.User.create(data);
        const jwtPayload = {
            name: payload.fullName,
            email: payload.email,
            role: createUser.role,
            address: createUser.address,
            phone: createUser.phone,
            photo: "",
            userId: createUser?._id,
        };
        const accessToken = (0, createAccesstoken_1.createAccessToken)(jwtPayload);
        return accessToken;
    }
    else {
        const jwtPayload = {
            name: isExist.fullName,
            email: payload.email,
            role: isExist.role,
            address: isExist.address,
            phone: isExist.phone,
            photo: isExist.image,
            userId: isExist?._id,
        };
        const accessToken = (0, createAccesstoken_1.createAccessToken)(jwtPayload);
        return accessToken;
    }
};
const registerUser = async (payload) => {
    const { fullName, email, password, confirmPassword } = payload;
    const passwordRegex = /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-])(?=.{6,32}$).*$/;
    if (!passwordRegex.test(password)) {
        throw new AppError_1.default(404, 'Password should atleast 1 special character and 6-32 digit long');
    }
    const isUserExist = await user_model_1.User.exists({ email });
    if (isUserExist) {
        throw new AppError_1.default(409, 'User alreday exist.');
    }
    ;
    if (password !== confirmPassword)
        throw new AppError_1.default(403, 'Password not matched.');
    const data = { fullName, email, password, role: "user" };
    data.password = await (0, hashing_1.makeHash)(data.password);
    const createUser = await user_model_1.User.create(data);
    const jwtPayload = {
        name: payload.fullName,
        email: payload.email,
        role: createUser.role,
        address: createUser.address || "",
        phone: createUser.phone,
        photo: createUser.image || "",
        userId: createUser?._id,
    };
    const accessToken = (0, createAccesstoken_1.createAccessToken)(jwtPayload);
    return accessToken;
};
const getUser = async (id) => {
    const isUserExist = await user_model_1.User.findById(id, { password: 0 });
    if (!isUserExist) {
        throw new AppError_1.default(404, 'User not exist.');
    }
    ;
    return isUserExist;
};
const updateUser = async ({ id, payload }) => {
    const isUserExist = await user_model_1.User.exists({ _id: id });
    if (!isUserExist) {
        throw new AppError_1.default(404, 'User not exist.');
    }
    ;
    const result = user_model_1.User.findByIdAndUpdate(id, { $set: payload });
    return result;
};
exports.userServices = {
    getUser,
    loginUser,
    registerUser,
    updateUser,
    googleLogin
};
//# sourceMappingURL=user.service.js.map