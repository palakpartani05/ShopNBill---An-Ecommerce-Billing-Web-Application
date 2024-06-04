import { Product } from "./product.model";

export interface MyOrderDetails{
    orderid: number;
    orderFullName: string;
    orderFullOrder: string;
    orderContactNumber: string;
    orderAlternateContactNumber: string;
    orderStatus:string;
    orderAmount: number;
    product: Product;
    user:any;
}