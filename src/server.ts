import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app";
dotenv.config();



async function main() {
    try {
        await mongoose.connect(process.env.DB as string);
        app.listen(5000, () => {
            console.log(`Example app listening on port ${5000}`)
        });
    } catch (error) {
        console.log(error);
    }
};


main();