import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { NotificationService } from '../../purchases/services/notification.service';
import { Notification } from '../../purchases/models/notification';
import { CartService } from 'src/app/purchases/services/cart.service';
import { ConfigOptionsService } from 'src/app/shared/services/config-options.service';


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
    private cartService: CartService,
    private config: ConfigOptionsService
  ) { }

  onProductPurchase() {
    if (!this.product.isAvailable) {
      return;
    }

    this.config.setConfig({id: "sad"});
    var v = this.config.getConfig();
    this.notificationService.addNotification(new Notification("Item have been purchased." + v.id, this.product));
    this.cartService.addProduct(this.product);
  }

  onProductRemove() {
    this.cartService.removeProduct(this.product);
  }

  onIncreaseProductCount() {
    this.cartService.increaseProductCount(this.product);
  }

  onDecreaseProductCount() {
    this.cartService.decreaseProductCount(this.product);
  }
}
