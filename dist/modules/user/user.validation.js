"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const loginValidation = joi_1.default.object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
const registerValidation = joi_1.default.object({
    fullName: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    confirmPassword: joi_1.default.string().required(),
});
const updateValidation = joi_1.default.object({
    fullName: joi_1.default.string().optional(),
    phone: joi_1.default.string().optional(),
    address: joi_1.default.string().optional(),
    image: joi_1.default.string().optional(),
    addresses: joi_1.default.array().optional()
});
exports.userValidation = {
    loginValidation,
    registerValidation,
    updateValidation
};
//# sourceMappingURL=user.validation.js.map