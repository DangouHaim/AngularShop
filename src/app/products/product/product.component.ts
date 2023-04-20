import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { NotificationService } from '../../purchases/services/notification.service';
import { Notification } from '../../purchases/models/notification';
import { CartService } from 'src/app/purchases/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input()
  product!: IProduct;

  constructor(
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  onProductPurchase() {
    this.notificationService.addNotification(new Notification("Item have been purchased.", this.product));
    this.cartService.addProduct(this.product);
  }
}
