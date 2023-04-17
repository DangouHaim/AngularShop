import { Injectable } from '@angular/core';
import { Category } from '../enums/category.enum';
import { Product, IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor() { }

getProducts() : Array<IProduct> {
  return [
    new Product("How to be inactive", "This book is actually about how to be inactive", 150, Category.Book, false),
    new Product("How to be an active", "Press the button", 150, Category.Book, true),
    new Product("How to be a short", "Shorter than a book", 150, Category.Notepad, true),
    new Product("Just a book", "This book is about appreciating yourself", 15000000, Category.Book, true),
  ];
}

}
