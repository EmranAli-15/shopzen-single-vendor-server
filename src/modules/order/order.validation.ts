import Joi from "joi";

const createOrder = Joi.object({
    products: Joi.array().required(),
    userId: Joi.string().required()
});

export const orderValidation = {
    createOrder
};