import { Component, OnInit, Output } from '@angular/core';
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
  products!: Array<IProduct>;

  constructor(cartService: CartService) {
    super();

    this.products = cartService.getProducts();
  }

  ngOnInit() {
  }

}
