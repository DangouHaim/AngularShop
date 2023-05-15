import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';
import { CartService } from '../services/cart.service';
import { Trackable } from '../../shared/extentions/Trackable';
import { EventHandlerContext } from 'src/app/shared/events/event-handler-context';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent extends Trackable implements OnInit {

  @Output()
  products!: Array<IProduct>;
  @Output()
  total!: number;
  @Output()
  count!: number;

  constructor(cartService: CartService) {
    super();

    this.products = cartService.getProducts();
    cartService.bindAddProductEventHandler(this.onProductAddedHandler, this);
  }

  ngOnInit() {
  }

  onProductAddedHandler(handlerContext : EventHandlerContext<CartComponent, CartService>) {

    handlerContext.handlerContext.total = handlerContext.sender.getTotalPrice();
    handlerContext.handlerContext.count = handlerContext.sender.getTotalCount();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
  }
}
