"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptHash = exports.makeHash = void 0;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const makeHash = async (password) => {
    const encrypted = await bcrypt.hash(password, saltRounds);
    return encrypted;
};
exports.makeHash = makeHash;
const decryptHash = async (plain, hash) => {
    const decrypted = await bcrypt.compare(plain, hash);
    return decrypted;
};
exports.decryptHash = decryptHash;
//# sourceMappingURL=hashing.js.map