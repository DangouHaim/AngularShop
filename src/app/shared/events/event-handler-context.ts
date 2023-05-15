import { IEventArgs } from "./event-args";

export class EventHandlerContext<TContext, TSender> {
    constructor (
      public handlerContext : TContext,
      public sender : TSender,
      public eventArgs : IEventArgs,
    ) { }
}