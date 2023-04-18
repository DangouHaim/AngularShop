import { IUniqueObject } from "./UniqueObject";

export class Trackable {
  constructor () { }

  trackById(index: number, item: IUniqueObject): string { return item.id; }
}