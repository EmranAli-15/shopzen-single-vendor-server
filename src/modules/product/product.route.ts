import express from "express";
import { validator } from "../../middlewares/validator";
import { auth } from "../../middlewares/auth";
import { productValidation } from "./product.validation";
import { productControllers } from "./product.controller";
const route = express.Router();


route.post("/product/createProduct", auth("admin"), validator(productValidation.createProduct), productControllers.createProduct);

route.get("/product/getAllProduct", productControllers.getAllProducts);



export const productRoutes = route;