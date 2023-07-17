import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime: Date = new Date();
    return next.handle(req).pipe(
      tap((): void => {
        console.log((new Date().valueOf() - startTime.valueOf()) / 1000)
      }),
    );
  }
}