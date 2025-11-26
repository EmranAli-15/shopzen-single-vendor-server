import express from "express";
import { validator } from "../../middlewares/validator";
import { auth } from "../../middlewares/auth";
import { categoryValidation } from "./category.validation";
import { categoryController } from "./category.controller";
const route = express.Router();


route.post("/category/createCategory", auth("admin"), validator(categoryValidation.createCategory), categoryController.createCategory);

route.patch("/category/updateCategory/:categoryId", auth("admin"), validator(categoryValidation.updateCategory), categoryController.updateCategory);

route.get("/category/getCategoris", categoryController.getCategories);

route.get("/category/getSingleCategory/:categoryId", categoryController.getSingleCategory);


export const categoryRoutes = route;