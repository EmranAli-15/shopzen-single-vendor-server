"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
async function main() {
    try {
        await mongoose_1.default.connect(process.env.DB);
        app_1.app.listen(5000, () => {
            console.log(`Example app listening on port ${5000}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
;
main();
//# sourceMappingURL=server.js.map