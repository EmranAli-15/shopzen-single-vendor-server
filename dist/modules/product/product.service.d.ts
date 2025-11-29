import { TProduct } from "./product.interface";
export declare const productServices: {
    createProduct: (payload: TProduct) => Promise<import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getAllProduct: ({ skip, limit }: {
        skip: number;
        limit: number;
    }) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    getSingleProduct: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    updateProduct: ({ id, payload }: {
        id: string;
        payload: TProduct;
    }) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    deleteProduct: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    getProductsByCategory: ({ id, page }: {
        id: string;
        page: number;
    }) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    searchProducts: (text: string) => Promise<any[]>;
};
//# sourceMappingURL=product.service.d.ts.map