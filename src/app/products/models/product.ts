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
    count: number;
}

export class Product extends UniqueObject implements IProduct {
    public static empty = new Product("", "", 0, Category.None, false, false, 0);

    constructor (
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public isCartItem: boolean = false,
        public count: number = 1,
        ) { super() }
}