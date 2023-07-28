export interface ICheckoutModel {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    deliveryRequired: boolean;
    deliveryAddress: string;
}

export class CheckoutModel implements ICheckoutModel {

    constructor (
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public phone: string = "",
        public deliveryRequired: boolean = false,
        public deliveryAddress: string = "",
        ) { }
}