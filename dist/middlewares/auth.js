"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt_decode_1 = require("jwt-decode");
const AppError_1 = __importDefault(require("../errors/AppError"));
const handleAsync_1 = require("../utils/handleAsync");
const auth = (role) => {
    return (0, handleAsync_1.handleAsync)(async (req, res, next) => {
        const token = req.headers.token;
        if (!token) {
            throw new AppError_1.default(403, "Not authorized. token is missing.");
        }
        const decoded = (0, jwt_decode_1.jwtDecode)(token);
        if (decoded.role !== role) {
            throw new AppError_1.default(403, "Not authorized.");
        }
        next();
    });
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map