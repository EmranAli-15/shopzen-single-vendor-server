import Joi from "joi";

const createProduct = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    images: Joi.array().optional(),

    original_price: Joi.number().required(),
    discount: Joi.number().min(0).max(100).default(0),

    rating: Joi.number().optional(),

    stock: Joi.number().default(10),
    brand: Joi.string().optional(),
});

const updateProduct = Joi.object({
    name: Joi.string().optional(),
    category: Joi.string().optional(),
    description: Joi.string().optional(),
    image: Joi.string().optional(),
    images: Joi.array().optional(),

    original_price: Joi.number().positive().optional(),
    discount: Joi.number().min(0).max(100).optional(),

    rating: Joi.number().optional(),

    stock: Joi.number().optional(),
    brand: Joi.string().optional(),
});


export const productValidation = {
    createProduct,
    updateProduct
}