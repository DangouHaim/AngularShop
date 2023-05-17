import { IEventArgs } from "src/app/shared/events/event-args";
import { IProduct } from "../models/product";

export class ProductEventArgs implements IEventArgs {
    constructor (
      public products : ReadonlyArray<IProduct>,
      public product : Readonly<IProduct>,
    ) { }
  }