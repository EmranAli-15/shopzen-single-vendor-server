export type TRegister = {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string;
}

export type TLogin = {
    email: string,
    password: string
}

export type TUser = {
    fullName: string,
    email: string,
    password: string,
    image: string,
    phone: string,
    address: string,
    addresses: [],
    role: string
}