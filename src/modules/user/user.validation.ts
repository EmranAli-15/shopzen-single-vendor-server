import Joi from "joi";

const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

const registerValidation = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
});

const updateValidation = Joi.object({
    fullName: Joi.string().optional(),
    phone: Joi.string().optional(),
    address: Joi.string().optional(),
    image: Joi.string().optional(),
    addresses: Joi.array().optional()
});


export const userValidation = {
    loginValidation,
    registerValidation,
    updateValidation
}