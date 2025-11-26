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
    fullName: Joi.string().required(),
    phone: Joi.string(),
    address: Joi.string(),
    image: Joi.string()
});


export const userValidation = {
    loginValidation,
    registerValidation,
    updateValidation
}