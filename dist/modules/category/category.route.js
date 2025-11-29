"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middlewares/validator");
const auth_1 = require("../../middlewares/auth");
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const route = express_1.default.Router();
route.post("/category/createCategory", (0, auth_1.auth)("admin"), (0, validator_1.validator)(category_validation_1.categoryValidation.createCategory), category_controller_1.categoryController.createCategory);
route.patch("/category/updateCategory/:categoryId", (0, auth_1.auth)("admin"), (0, validator_1.validator)(category_validation_1.categoryValidation.updateCategory), category_controller_1.categoryController.updateCategory);
route.delete("/category/deleteCategory/:categoryId", (0, auth_1.auth)("admin"), category_controller_1.categoryController.deleteCategory);
route.get("/category/getCategoris", category_controller_1.categoryController.getCategories);
route.get("/category/getSingleCategory/:categoryId", category_controller_1.categoryController.getSingleCategory);
exports.categoryRoutes = route;
//# sourceMappingURL=category.route.js.map