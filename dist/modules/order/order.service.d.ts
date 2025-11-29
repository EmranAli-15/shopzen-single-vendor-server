import { TOrder } from "./order.interface";
export declare const orderServices: {
    createOrder: (payload: TOrder) => Promise<import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getMyOrders: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    updateOrder: ({ orderId, status }: {
        orderId: string;
        status: string;
    }) => Promise<(import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=order.service.d.ts.map