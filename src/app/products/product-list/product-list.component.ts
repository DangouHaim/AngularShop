import { Component, Output } from '@angular/core';
import { Trackable } from 'src/app/shared/extentions/Trackable';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent extends Trackable {

  @Output()
  products!: Array<IProduct>;

  constructor(private productService: ProductService) {
    super();

    this.products = productService.getProducts();
  }
}
