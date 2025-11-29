import mongoose from "mongoose";
import { TProduct } from "./product.interface";
export declare const Product: mongoose.Model<TProduct, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, TProduct, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<TProduct, mongoose.Model<TProduct, any, any, any, mongoose.Document<unknown, any, TProduct, any, mongoose.DefaultSchemaOptions> & TProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, TProduct>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, TProduct, mongoose.Document<unknown, {}, TProduct, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<string, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: mongoose.SchemaDefinitionProperty<string, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    image?: mongoose.SchemaDefinitionProperty<string, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    images?: mongoose.SchemaDefinitionProperty<string[], TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    original_price?: mongoose.SchemaDefinitionProperty<number, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    discount?: mongoose.SchemaDefinitionProperty<number, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    discount_price?: mongoose.SchemaDefinitionProperty<number | undefined, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    rating?: mongoose.SchemaDefinitionProperty<number, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    stock?: mongoose.SchemaDefinitionProperty<number | undefined, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    brand?: mongoose.SchemaDefinitionProperty<string | undefined, TProduct, mongoose.Document<unknown, {}, TProduct, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, TProduct>, TProduct>;
//# sourceMappingURL=product.model.d.ts.map