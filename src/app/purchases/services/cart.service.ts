import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import {EventEmitter} from '@angular/core';
import { EventHandlerContext } from 'src/app/shared/events/event-handler-context';
import { ProductEventArgs } from 'src/app/products/events-args/product-event-args';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<IProduct> = new Array<IProduct>();
  private productListChangedEvent: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  addProduct(product: IProduct) {
    var cartProduct = Object.create(product) as IProduct;
    cartProduct.isCartItem = true;

    this.products.push(cartProduct);
    this.productListChangedEvent.emit(cartProduct);
  }

  removeProduct(product: IProduct) {
    const index = this.products.indexOf(product, 0);

    if (index > -1) {
      this.products.splice(index, 1);
    }

    this.productListChangedEvent.emit(product);
  }

  increaseProductCount(product: IProduct) {
    product.count++;

    this.productListChangedEvent.emit(product);
  }

  decreaseProductCount(product: IProduct) {
    if (product.count > 1) {
      product.count--;
      this.productListChangedEvent.emit(product);
    }
  }

  bindProductListChangedHandler(handler : Function, handlerContext : object) {
    this.productListChangedEvent.subscribe(product => handler(
      new EventHandlerContext(handlerContext, this, new ProductEventArgs(product))));
  }

  getProducts() {
    return this.products;
  }

  getTotalPrice() {
    var total : number = 0;

    for(var price of this.products.map(p => p.price * p.count)) {
      total = total + price;
    }

    return total;
  }

  getTotalCount() {
    return this.products.length;
  }
}
