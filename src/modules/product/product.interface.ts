import { Types } from "mongoose";

export type TProduct = {
    name: string,
    category: Types.ObjectId,
    description: string,
    image: string,         // main image
    images: string[],       // gallery images
    original_price: number,
    discount: number,       // percentage (e.g., 10 means 10% off)
    discount_price?: number,
    rating: number,
    stock?: number,
    brand?: string,
}