import { IProduct } from "src/app/products/models/product";



export interface INotification {
    title: string;
    isVisible: boolean;
    product: IProduct
}

export class Notification implements INotification {

    isVisible: boolean = true;

    constructor (
        public title: string,
        public product: IProduct,
        ) { }
}