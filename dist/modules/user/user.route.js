"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middlewares/validator");
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middlewares/auth");
const route = express_1.default.Router();
route.post("/user/updateUser/:id", (0, auth_1.auth)("user"), (0, validator_1.validator)(user_validation_1.userValidation.updateValidation), user_controller_1.userController.updateUser);
route.post("/user/loginUser", (0, validator_1.validator)(user_validation_1.userValidation.loginValidation), user_controller_1.userController.loginUser);
route.get("/user/getUser/:id", (0, auth_1.auth)("user"), user_controller_1.userController.getUser);
route.post("/user/googleLogin", user_controller_1.userController.googleLogin);
route.post("/user/registerUser", (0, validator_1.validator)(user_validation_1.userValidation.registerValidation), user_controller_1.userController.createUser);
exports.userRoutes = route;
//# sourceMappingURL=user.route.js.map