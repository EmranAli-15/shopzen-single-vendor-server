"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    statusCode;
    constructor(status, message) {
        super(message);
        this.statusCode = status;
    }
    ;
}
;
exports.default = AppError;
//# sourceMappingURL=AppError.js.map