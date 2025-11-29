"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createOrder = joi_1.default.object({
    products: joi_1.default.array().required(),
    userId: joi_1.default.string().required()
});
exports.orderValidation = {
    createOrder
};
//# sourceMappingURL=order.validation.js.map