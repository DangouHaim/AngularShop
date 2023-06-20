import { Component, Output } from '@angular/core';
import { Trackable } from 'src/app/shared/extentions/Trackable';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent extends Trackable {

  @Output()
  products!: Observable<IProduct[]>;

  constructor(productService: ProductService) {
    super();

    this.products = productService.getProducts();
  }
}
