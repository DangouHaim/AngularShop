import { IUniqueObject } from "./UniqueObject";

export class Trackable<T extends { id: string } = IUniqueObject> {
  constructor () { }

  trackById(index: number, item: T): string { return item.id; }
}
