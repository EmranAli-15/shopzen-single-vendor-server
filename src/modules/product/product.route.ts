import express from "express";
import { validator } from "../../middlewares/validator";
import { auth } from "../../middlewares/auth";
import { productValidation } from "./product.validation";
import { productControllers } from "./product.controller";
const route = express.Router();


route.post("/product/createProduct", auth("admin"), validator(productValidation.createProduct), productControllers.createProduct);

route.patch("/product/updateProduct/:productId", auth("admin"), validator(productValidation.updateProduct), productControllers.updateProduct);

route.delete("/product/deleteProduct/:productId", auth("admin"), productControllers.deleteProduct);

route.get("/product/getSingleProduct/:productId", productControllers.getSingleProduct);

route.get("/product/getAllProduct", productControllers.getAllProducts);



export const productRoutes = route;