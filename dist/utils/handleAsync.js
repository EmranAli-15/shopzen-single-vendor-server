"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAsync = void 0;
const handleAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            return res.status(error.statusCode || 500).json({
                message: error?.message || "Unknown error, please try again."
            });
        }
    };
};
exports.handleAsync = handleAsync;
//# sourceMappingURL=handleAsync.js.map