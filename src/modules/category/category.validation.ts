import Joi from "joi";

const createCategory = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required()
});

const updateCategory = Joi.object({
    name: Joi.string().optional(),
    image: Joi.string().optional()
});


export const categoryValidation = {
    createCategory,
    updateCategory
}