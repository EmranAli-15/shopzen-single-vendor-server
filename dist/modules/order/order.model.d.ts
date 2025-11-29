import { Schema, Types } from "mongoose";
import { TOrder } from "./order.interface";
export declare const Order: import("mongoose").Model<TOrder, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, TOrder, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<TOrder, import("mongoose").Model<TOrder, any, any, any, import("mongoose").Document<unknown, any, TOrder, any, import("mongoose").DefaultSchemaOptions> & TOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any, TOrder>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TOrder, import("mongoose").Document<unknown, {}, TOrder, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    products?: import("mongoose").SchemaDefinitionProperty<[], TOrder, import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    totalAmount?: import("mongoose").SchemaDefinitionProperty<number, TOrder, import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TOrder, import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    status?: import("mongoose").SchemaDefinitionProperty<import("./order.interface").TOrderStatus, TOrder, import("mongoose").Document<unknown, {}, TOrder, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TOrder & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, TOrder>, TOrder>;
//# sourceMappingURL=order.model.d.ts.map