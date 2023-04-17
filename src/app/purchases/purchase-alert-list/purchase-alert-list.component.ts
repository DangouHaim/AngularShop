import { Component, Output } from '@angular/core';
import { INotification } from '../models/notification';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-purchase-alert-list',
  templateUrl: './purchase-alert-list.component.html',
  styleUrls: ['./purchase-alert-list.component.sass']
})
export class PurchaseAlertListComponent {

  @Output()
  notifications!: Array<INotification>;

  constructor(notificationService: NotificationService) {
    this.notifications = notificationService.getNotifications();
  }

}
