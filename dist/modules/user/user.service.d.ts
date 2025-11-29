import { TLogin, TRegister, TUser } from "./user.interface";
export declare const userServices: {
    getUser: (id: string) => Promise<import("mongoose").Document<unknown, {}, TUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    loginUser: (payload: TLogin) => Promise<string>;
    registerUser: (payload: TRegister) => Promise<string>;
    updateUser: ({ id, payload }: {
        id: string;
        payload: TUser;
    }) => Promise<(import("mongoose").Document<unknown, {}, TUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    googleLogin: (payload: TUser) => Promise<string>;
};
//# sourceMappingURL=user.service.d.ts.map