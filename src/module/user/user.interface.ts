type Name ={
    firstName: string;
    lastName: string
}

export interface IUser{
    _id?:string;
    phoneNumber: string;
    role: "Buyer" | "Seller";
    password: string;
    name: Name;
    address: string;
    budget?: number;
    income?: number;
    createdAt?: string;
    updatedAt?: string;
}