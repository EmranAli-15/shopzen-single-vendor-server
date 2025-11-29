import { Types } from "mongoose";
export type TProduct = {
    name: string;
    category: Types.ObjectId;
    description: string;
    image: string;
    images: string[];
    original_price: number;
    discount: number;
    discount_price?: number;
    rating: number;
    stock?: number;
    brand?: string;
};
//# sourceMappingURL=product.interface.d.ts.map