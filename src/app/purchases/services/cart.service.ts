import { Injectable } from '@angular/core';
import { IProduct, Product } from 'src/app/products/models/product';
import { EventEmitter } from '@angular/core';
import { ProductEventArgs } from 'src/app/products/events-args/product-event-args';
import { EventHandlerBinder } from 'src/app/shared/events/event-handler-binder';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private eventBinder = new EventHandlerBinder();
  private products: ReadonlyArray<IProduct> = new Array<IProduct>();
  private productListChangedEvent: EventEmitter<ProductEventArgs> = new EventEmitter();
  private productListClearedEvent: EventEmitter<ProductEventArgs> = new EventEmitter();

  constructor() { }

  bindProductListChangedEventHandler(handler : Function, handlerContext : object) {
    this.eventBinder.bindEventHandler(handler, handlerContext, this, this.productListChangedEvent);
  }

  bindproductListClearedEventHandler(handler : Function, handlerContext : object) {
    this.eventBinder.bindEventHandler(handler, handlerContext, this, this.productListClearedEvent);
  }

  addProduct(product: IProduct) {
    var cartProduct = Object.create(product) as IProduct;
    cartProduct.isCartItem = true;

    this.products = [...this.products, cartProduct];
    this.productListChangedEvent.emit(
      new ProductEventArgs(this.products, cartProduct));
  }

  removeProduct(product: IProduct) {
    const index = this.products.indexOf(product, 0);

    if (index > -1) {
      this.products = this.products.filter((_, i) => i !== index);
    }

    this.productListChangedEvent.emit(
      new ProductEventArgs(this.products, product));
  }

  increaseProductCount(product: IProduct) {
    product.count++;

    this.productListChangedEvent.emit(
      new ProductEventArgs(this.products, product));
  }

  decreaseProductCount(product: IProduct) {
    if (product.count > 1) {
      product.count--;
      this.productListChangedEvent.emit(
        new ProductEventArgs(this.products, product));
    }
  }

  getProducts() {
    return this.products as ReadonlyArray<IProduct>;
  }

  getTotalPrice() {
    return this.products.map(p => p.price * p.count)
      .reduce((sum, current) => sum + current);;
  }

  getTotalCount() {
    if (this.products.length == 0) {
      return this.products.length;
    }

    return this.products.map(c => c.count)
      .reduce((sum, current) => sum + current);
  }

  clear() {
    this.products = new Array<IProduct>();
    this.productListClearedEvent.emit(
      new ProductEventArgs(this.products, Product.empty));
  }

  isEmpty() {
    return this.getTotalCount() == 0;
  }
}
