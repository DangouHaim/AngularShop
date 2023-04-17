import { Component, Output } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {

  @Output()
  products!: Array<IProduct>;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

}
