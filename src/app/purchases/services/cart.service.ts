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
  private addProductEventEmitter: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  addProduct(product: IProduct) {
    var cartProduct = Object.create(product) as IProduct;
    cartProduct.isCartItem = true;

    this.products.push(cartProduct);
    this.addProductEventEmitter.emit(cartProduct);
  }

  bindAddProductEventHandler(handler : Function, handlerContext : object) {
    this.addProductEventEmitter.subscribe(product => handler(
      new EventHandlerContext(handlerContext, this, new ProductEventArgs(product))));
  }

  getProducts() {
    return this.products;
  }

  getTotalPrice() {
    var total : number = 0;

    for(var price of this.products.map(p => p.price)) {
      total = total + price;
    }

    return total;
  }

  getTotalCount() {
    return this.products.length;
  }
}
