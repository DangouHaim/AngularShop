import { Category } from "../enums/category.enum";

export interface IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}

export class Product implements IProduct {
    constructor (
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        ) { }
}