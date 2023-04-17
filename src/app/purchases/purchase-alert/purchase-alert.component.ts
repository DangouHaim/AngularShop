import { Component, Input, Output } from '@angular/core';
import { INotification } from '../models/notification';

@Component({
  selector: 'app-purchase-alert',
  templateUrl: './purchase-alert.component.html',
  styleUrls: ['./purchase-alert.component.sass']
})
export class PurchaseAlertComponent {

  @Input()
  notification!: INotification;

  constructor() { }

  hide() {
    this.notification.isVisible = false;
  }
}
