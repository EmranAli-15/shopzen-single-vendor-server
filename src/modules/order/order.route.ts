import express from "express";
import { validator } from "../../middlewares/validator";
import { auth } from "../../middlewares/auth";
import { orderValidation } from "./order.validation";
import { orderController } from "./order.controller";
const route = express.Router();


route.post("/order/createOrder", validator(orderValidation.createOrder), orderController.createOrder);

route.get("/order/getMyOrders/:userId", orderController.getMyorders);

route.patch("/order/updateOrder/:orderId", auth("admin"), orderController.updateOrder);



export const orderRoutes = route;