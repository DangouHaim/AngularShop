import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

const PRODUCTS_REQUEST_TEMPLATE = /products/;
const CART_ITEMS_REQUEST_TEMPLATE = /cartItems/;

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url.match(PRODUCTS_REQUEST_TEMPLATE) || req.url.match(CART_ITEMS_REQUEST_TEMPLATE)) {

      const startTime: Date = new Date();
      return next.handle(req).pipe(
        tap((): void => {
          console.log(`[${req.method}] ${req.urlWithParams} - ${(new Date().valueOf() - startTime.valueOf()) / 1000}`)
        }),
      );
    }

    return next.handle(req);
  }
}