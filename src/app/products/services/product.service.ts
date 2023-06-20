import { Injectable } from '@angular/core';
import { Category } from '../enums/category.enum';
import { Product, IProduct } from '../models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private productsUrl = "http://localhost:3000/products";

constructor(private http: HttpClient) { }

getProducts() : Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.productsUrl);
}

}
