import { Schema } from "mongoose";
import { TCategory } from "./category.interface";
export declare const Category: import("mongoose").Model<TCategory, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, TCategory, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<TCategory, import("mongoose").Model<TCategory, any, any, any, import("mongoose").Document<unknown, any, TCategory, any, import("mongoose").DefaultSchemaOptions> & TCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, TCategory>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TCategory, import("mongoose").Document<unknown, {}, TCategory, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, TCategory, import("mongoose").Document<unknown, {}, TCategory, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    image?: import("mongoose").SchemaDefinitionProperty<string, TCategory, import("mongoose").Document<unknown, {}, TCategory, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, TCategory>, TCategory>;
//# sourceMappingURL=category.model.d.ts.map