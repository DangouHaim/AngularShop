import { Component, Output } from '@angular/core';
import { Category } from 'src/app/products/enums/category.enum';
import { IProduct, Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.sass']
})
export class FakeComponent {

  @Output()
  product: IProduct = new Product("Book", "Book description", 0, Category.Book, false);

  constructor() { }
}
