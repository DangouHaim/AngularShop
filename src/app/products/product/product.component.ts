import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { NotificationService } from '../../purchases/services/notification.service';
import { Notification } from '../../purchases/models/notification';
import { CartService } from 'src/app/purchases/services/cart.service';
import { ConfigOptionsService } from 'src/app/shared/services/config-options.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input()
  product!: IProduct;
  @Output()
  isProductPage: boolean = false;
  @Output()
  isAdmin: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private cartService: CartService,
    private config: ConfigOptionsService,
    private route: ActivatedRoute,
    userService: UserService,
    router: Router
  ) {
    this.isAdmin = userService.isAdmin() && router.url == "/admin/products";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id) {
        this.isProductPage = true;
        this.productService.getProduct(id).subscribe((product) => {
          this.product = product;
        });
      }
    });
  }

  onProductPurchase() {
    if (!this.product.isAvailable) {
      return;
    }

    this.config.setConfig({id: this.product.id});
    var config = this.config.getConfig();
    this.notificationService.addNotification(new Notification("Item have been purchased." + config.id, this.product));
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
