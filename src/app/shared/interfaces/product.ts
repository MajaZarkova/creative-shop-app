export interface IProduct {
    _id: string;
    productName: string;
    description: string;
    price: number;
    seller: {
        _id: string;
        firstName: string;
        lastName: string;
        email: number;
        password: string;
        rePassword: string;
        orders: any[];
        _v: number
    }
    image: string;
    quantity: number;
    category: string;
    _v: number
}