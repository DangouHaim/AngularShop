import { Injectable } from '@angular/core';
import { IProduct, Product } from 'src/app/products/models/product';
import { EventEmitter } from '@angular/core';
import { ProductEventArgs } from 'src/app/products/events-args/product-event-args';
import { EventHandlerBinder } from 'src/app/shared/events/event-handler-binder';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, take, throwError } from 'rxjs';

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
    return this.products.map(p => p.price * p.count)
      .reduce((sum, current) => sum + current);;
  }

  getTotalCount() {

    if (!this.products || this.products.length == 0) {
      return 0;
    }

    return this.products.map(c => c.count)
      .reduce((sum, current) => sum + current);
  }

  getTotalCountx() {
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

  private handleError(error: HttpErrorResponse) {
    alert("");
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
