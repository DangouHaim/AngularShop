import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { CartService } from '../services/cart.service';
import { Trackable } from '../../shared/extentions/Trackable';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent extends Trackable implements OnInit {

  @Output()
  products!: Observable<IProduct[]>;
  @Output()
  total!: Observable<number>;
  @Output()
  count!: Observable<number>;
  @Output()
  isCartEmpty!: Observable<boolean>;
  @Input()
  ascending: boolean = false;
  @Input()
  orderBy: string = "Price";

  constructor(private cartService: CartService) {
    super();

    this.bindData(this, cartService);
    cartService.bindProductListChangedEventHandler(this.onProductListChangedHandler, this);
    cartService.bindproductListClearedEventHandler(this.onProductListClearedHandler, this);
  }

  ngOnInit() {
  }

  onProductListChangedHandler(context : CartComponent, cartService : CartService) {
    context.bindData(context, cartService);
  }

  onProductListClearedHandler(context : CartComponent, cartService : CartService) {
    context.bindData(context, cartService);
  }

  onCartClear() {
    this.cartService.clear();
  }

  bindData(context: CartComponent, cartService : CartService) {
    context.products = cartService.getProducts();
    context.products = cartService.getProducts();
    context.total = cartService.getTotalPrice();
    context.count = cartService.getTotalCount();
    context.isCartEmpty = cartService.isEmpty();
  }
}
