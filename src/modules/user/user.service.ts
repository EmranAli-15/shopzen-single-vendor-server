import AppError from "../../errors/AppError";
import { createAccessToken } from "../../utils/createAccesstoken";
import { decryptHash, makeHash } from "../../utils/hashing";
import { TLogin, TRegister, TUser } from "./user.interface";
import { User } from "./user.model";








const loginUser = async (payload: TLogin) => {
    const isUserExist = await User.findOne({ email: payload.email });

    if (!isUserExist) {
        throw new AppError(404, 'User not exist.');
    };

    const passwordDecoded = await decryptHash(payload.password, isUserExist.password);
    if (!passwordDecoded) {
        throw new AppError(404, 'Password incorrect.');
    };

    const jwtPayload = {
        name: isUserExist.fullName,
        email: payload.email,
        role: isUserExist.role,
        address: isUserExist.address,
        phone: isUserExist.phone,
        photo: isUserExist.image,
        userId: isUserExist?._id,
    };

    const accessToken = createAccessToken(jwtPayload);
    return accessToken;
}



const googleLogin = async (payload: TUser) => {
    const { email, fullName } = payload;
    const isExist = await User.findOne({ email });

    if (!isExist) {
        const password = "123456"
        const data = { email, fullName, password, role: "user" };
        data.password = await makeHash(data.password)
        const createUser = await User.create(data);

        const jwtPayload = {
            name: payload.fullName,
            email: payload.email,
            role: createUser.role,
            address: createUser.address,
            phone: createUser.phone,
            photo: "",
            userId: createUser?._id,
        };
        const accessToken = createAccessToken(jwtPayload);
        return accessToken;
    }
    else {
        const jwtPayload = {
            name: isExist.fullName,
            email: payload.email,
            role: isExist.role,
            address: isExist.address,
            phone: isExist.phone,
            photo: isExist.image,
            userId: isExist?._id,
        };

        const accessToken = createAccessToken(jwtPayload);
        return accessToken;
    }
}




const registerUser = async (payload: TRegister) => {
    const { fullName, email, password, confirmPassword } = payload;
    const passwordRegex = /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-])(?=.{6,32}$).*$/;

    if (!passwordRegex.test(password)) {
        throw new AppError(404, 'Password should atleast 1 special character and 6-32 digit long');
    }

    const isUserExist = await User.exists({ email });

    if (isUserExist) {
        throw new AppError(409, 'User alreday exist.');
    };

    if (password !== confirmPassword) throw new AppError(403, 'Password not matched.');

    const data = { fullName, email, password, role: "user" }
    data.password = await makeHash(data.password)
    const createUser = await User.create(data);

    const jwtPayload = {
        name: payload.fullName,
        email: payload.email,
        role: createUser.role,
        address: createUser.address || "",
        phone: createUser.phone,
        photo: createUser.image || "",
        userId: createUser?._id,
    };

    const accessToken = createAccessToken(jwtPayload);
    return accessToken;
};


const getUser = async (id: string) => {
    const isUserExist = await User.findById(id, { password: 0 });

    if (!isUserExist) {
        throw new AppError(404, 'User not exist.');
    };

    return isUserExist;
};



const updateUser = async ({ id, payload }: { id: string, payload: TUser }) => {
    const isUserExist = await User.exists({ _id: id });

    if (!isUserExist) {
        throw new AppError(404, 'User not exist.');
    };

    const result = User.findByIdAndUpdate(id, { $set: payload });
    return result
};



export const userServices = {
    getUser,
    loginUser,
    registerUser,
    updateUser,
    googleLogin
}