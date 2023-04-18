export interface IUniqueObject {
  id: string
}

export class UniqueObject implements IUniqueObject {

  public id!: string

  constructor () {
    this.id = this.getUniqueId();
  }

  getUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify
  
    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point
  
    return `${dateStr}-${randomStr}`;
  }
}