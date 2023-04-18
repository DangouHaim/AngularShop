import { UniqueObject } from "src/app/shared/extentions/UniqueObject";
import { Category } from "../enums/category.enum";
import { IUniqueObject } from '../../shared/extentions/UniqueObject';

export interface IProduct extends IUniqueObject {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    isCartItem: boolean;
}

export class Product extends UniqueObject implements IProduct {
    constructor (
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public isCartItem: boolean = false,
        ) { super() }
}