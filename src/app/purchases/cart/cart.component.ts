import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { CartService } from '../services/cart.service';
import { Trackable } from '../../shared/extentions/Trackable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent extends Trackable implements OnInit {

  @Output()
  products!: ReadonlyArray<IProduct>;
  @Output()
  total!: Readonly<number>;
  @Output()
  count!: Readonly<number>;
  @Input()
  ascending: boolean = false;
  @Input()
  orderBy: string = "Price";

  constructor(private cartService: CartService) {
    super();

    this.products = cartService.getProducts();
    cartService.bindProductListChangedEventHandler(this.onProductListChangedHandler, this);
    cartService.bindproductListClearedEventHandler(this.onProductListClearedHandler, this);
  }

  ngOnInit() {
  }

  onProductListChangedHandler(context : CartComponent, cartService : CartService) {
    context.products = cartService.getProducts();
    context.total = cartService.getTotalPrice();
    context.count = cartService.getTotalCount();
  }

  onProductListClearedHandler(context : CartComponent, cartService : CartService) {
    context.products = cartService.getProducts();
  }

  onCartClear() {
    this.cartService.clear();
  }

  isEmptyCart() {
    return this.cartService.isEmpty();
  }
}
