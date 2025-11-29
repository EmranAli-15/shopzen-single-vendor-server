"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createProduct = joi_1.default.object({
    name: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    image: joi_1.default.string().required(),
    images: joi_1.default.array().optional(),
    original_price: joi_1.default.number().required(),
    discount: joi_1.default.number().min(0).max(100).default(0),
    rating: joi_1.default.number().optional(),
    stock: joi_1.default.number().default(10),
    brand: joi_1.default.string().optional(),
});
const updateProduct = joi_1.default.object({
    name: joi_1.default.string().optional(),
    category: joi_1.default.string().optional(),
    description: joi_1.default.string().optional(),
    image: joi_1.default.string().optional(),
    images: joi_1.default.array().optional(),
    original_price: joi_1.default.number().positive().optional(),
    discount: joi_1.default.number().min(0).max(100).optional(),
    rating: joi_1.default.number().optional(),
    stock: joi_1.default.number().optional(),
    brand: joi_1.default.string().optional(),
});
exports.productValidation = {
    createProduct,
    updateProduct
};
//# sourceMappingURL=product.validation.js.map