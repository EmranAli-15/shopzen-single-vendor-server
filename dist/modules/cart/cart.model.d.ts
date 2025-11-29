import { Schema, Types } from "mongoose";
import { TCart } from "./cart.interface";
export declare const Cart: import("mongoose").Model<TCart, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, TCart, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<TCart, import("mongoose").Model<TCart, any, any, any, import("mongoose").Document<unknown, any, TCart, any, import("mongoose").DefaultSchemaOptions> & TCart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any, TCart>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TCart, import("mongoose").Document<unknown, {}, TCart, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<Schema.Types.ObjectId, TCart, import("mongoose").Document<unknown, {}, TCart, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    productId?: import("mongoose").SchemaDefinitionProperty<Schema.Types.ObjectId, TCart, import("mongoose").Document<unknown, {}, TCart, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, TCart>, TCart>;
//# sourceMappingURL=cart.model.d.ts.map