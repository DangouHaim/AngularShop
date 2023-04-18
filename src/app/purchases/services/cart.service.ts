import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<IProduct> = new Array<IProduct>();

  constructor() { }

  addProduct(product: IProduct) {
    var cartProduct = Object.create(product) as IProduct;
    cartProduct.isCartItem = true;

    this.products.push(cartProduct)
  }

  getProducts() {
    return this.products;
  }
}
