import { Component, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.sass']
})
export class ProcessOrderComponent implements OnInit {

  @Output()
  total!: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.total = this.cartService.getTotalPrice();
  }
}
