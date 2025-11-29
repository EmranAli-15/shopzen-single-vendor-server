export declare const cartService: {
    saveProduct: (payload: {
        userId: string;
        productId: string;
    }) => Promise<(import("mongoose").Document<unknown, {}, import("./cart.interface").TCart, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<import("./cart.interface").TCart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    deleteProductFromCart: (payload: {
        userId: string;
        productId: string;
    }) => Promise<import("mongodb").DeleteResult>;
    getMyCart: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./cart.interface").TCart, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<import("./cart.interface").TCart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
};
//# sourceMappingURL=cart.service.d.ts.map