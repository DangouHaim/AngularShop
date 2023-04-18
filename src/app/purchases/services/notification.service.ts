import { Injectable } from '@angular/core';
import { INotification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Array<INotification> = new Array<INotification>();

  constructor() { }

  addNotification(notification: INotification) {
    this.notifications.push(notification)
  }

  getNotifications() {
    return this.notifications;
  }
}
