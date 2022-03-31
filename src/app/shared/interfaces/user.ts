export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: number;
    password: string;
    rePassword: string;
    orders: string[];
    productsListed: string[];
    _v: number
}