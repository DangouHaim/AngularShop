import { Injectable } from '@angular/core';
import { IProduct, Product } from 'src/app/products/models/product';
import { EventEmitter } from '@angular/core';
import { ProductEventArgs } from 'src/app/products/events-args/product-event-args';
import { EventHandlerBinder } from 'src/app/shared/events/event-handler-binder';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, defaultIfEmpty, map, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsUrl = "http://localhost:3000/cartItems";
  private eventBinder = new EventHandlerBinder();
  private products: ReadonlyArray<IProduct> = new Array<IProduct>();
  private productListChangedEvent: EventEmitter<ProductEventArgs> = new EventEmitter();
  private productListClearedEvent: EventEmitter<ProductEventArgs> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((value: IProduct[]) => {
      this.products = value;
    });
  }

  bindProductListChangedEventHandler(handler : Function, handlerContext : object) {
    this.eventBinder.bindEventHandler(handler, handlerContext, this, this.productListChangedEvent);
  }

  bindproductListClearedEventHandler(handler : Function, handlerContext : object) {
    this.eventBinder.bindEventHandler(handler, handlerContext, this, this.productListClearedEvent);
  }

  addProduct(product: IProduct) {
    var isCartItem = true;
    var cartProduct = new Product(
      product.name,
      product.description,
      product.price,
      product.category,
      product.isAvailable,
      isCartItem,
      product.count
    );

    this.products = [...this.products, cartProduct];
    this.http.post(this.cartItemsUrl, cartProduct).subscribe(() => {
      this.productListChangedEvent.emit(new ProductEventArgs(this.products, cartProduct));
    });
  }

  removeProduct(product: IProduct) {
    const index = this.products.map(p => p.id).indexOf(product.id, 0);

    if (index > -1) {
      this.products = this.products.filter((_, i) => i !== index);
      this.http.delete(`${this.cartItemsUrl}/${product.id}`).subscribe(() => {
        this.productListChangedEvent.emit(
          new ProductEventArgs(this.products, product));
      });
    }
  }

  increaseProductCount(product: IProduct) {
    product.count++;
    this.http.put(`${this.cartItemsUrl}/${product.id}`, product).subscribe(() => {
      this.productListChangedEvent.emit(
        new ProductEventArgs(this.products, product));
    });
  }

  decreaseProductCount(product: IProduct) {
    if (product.count > 1) {
      product.count--;
      this.http.put(`${this.cartItemsUrl}/${product.id}`, product).subscribe(() => {
        this.productListChangedEvent.emit(
          new ProductEventArgs(this.products, product));
      });
    }
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.cartItemsUrl);
  }

  getTotalPrice() {
    return this.getProducts().pipe(
      tap((products) => {
        products.push(Product.empty)
      }),
      map((products: IProduct[]) => products.map(p => p.price * p.count)
      .reduce((sum, current) => sum + current))
    );
  }

  getTotalCount() {
    return this.getProducts().pipe(
      tap((products) => {
        products.push(Product.empty)
      }),
      map((products: IProduct[]) => products.map(product => product.count)
      .reduce((sum, current) => sum + current))
    );
  }

  clear() {
    this.getProducts().subscribe((products) => {
      for (let product of products) {
        this.removeProduct(product);
      }
      
      this.products = new Array<IProduct>();
      this.productListClearedEvent.emit(
        new ProductEventArgs(this.products, Product.empty));
    });
  }

  isEmpty(): Observable<boolean> {
    return this.getTotalCount().pipe(
      map((count: number) => count == 0)
    );
  }
}
