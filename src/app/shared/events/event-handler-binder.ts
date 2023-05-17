import { EventEmitter } from "@angular/core";
import { IEventArgs } from "./event-args";

export class EventHandlerBinder {
  bindEventHandler(handler : Function, handlerContext : object, sender : object, event : EventEmitter<any>) {
    event.subscribe(eventArgs => handler(handlerContext, sender, eventArgs as IEventArgs));
  }
}