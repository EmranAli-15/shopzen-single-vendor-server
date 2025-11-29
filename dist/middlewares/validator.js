"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const handleAsync_1 = require("../utils/handleAsync");
const validator = (schema) => {
    return (0, handleAsync_1.handleAsync)(async (req, res, next) => {
        await schema.validateAsync(req.body, { errors: { wrap: { label: "" } } });
        next();
    });
};
exports.validator = validator;
//# sourceMappingURL=validator.js.map