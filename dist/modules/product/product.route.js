"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middlewares/validator");
const auth_1 = require("../../middlewares/auth");
const product_validation_1 = require("./product.validation");
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
route.post("/product/createProduct", (0, auth_1.auth)("admin"), (0, validator_1.validator)(product_validation_1.productValidation.createProduct), product_controller_1.productControllers.createProduct);
route.patch("/product/updateProduct/:productId", (0, auth_1.auth)("admin"), (0, validator_1.validator)(product_validation_1.productValidation.updateProduct), product_controller_1.productControllers.updateProduct);
route.delete("/product/deleteProduct/:productId", (0, auth_1.auth)("admin"), product_controller_1.productControllers.deleteProduct);
route.get("/product/getSingleProduct/:productId", product_controller_1.productControllers.getSingleProduct);
route.get("/product/getCategoryProducts/:categoryId", product_controller_1.productControllers.getProductsByCategory);
route.get("/product/getAllProduct", product_controller_1.productControllers.getAllProducts);
route.get("/product/searchProducts", product_controller_1.productControllers.searchProducts);
exports.productRoutes = route;
//# sourceMappingURL=product.route.js.map