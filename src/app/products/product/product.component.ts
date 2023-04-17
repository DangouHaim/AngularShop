import { Component, Input } from '@angular/core';
import { Category } from 'src/app/products/enums/category.enum';
import { IProduct, Product } from 'src/app/products/models/product';
import { NotificationService } from '../../purchases/services/notification.service';
import { Notification } from '../../purchases/models/notification';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input()
  product: IProduct = new Product("Book", "Book description", 150, Category.Book, true);

  constructor(public notificationService: NotificationService) { }

  onProductPurchase() {
    this.notificationService.addNotification(new Notification("Item have been purchased.", this.product));
  }
}
