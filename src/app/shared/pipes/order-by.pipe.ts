import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  private static key: keyof IProduct = "count";

  private compare( a: IProduct, b: IProduct) {
    if ( a[OrderByPipe.key] < b[OrderByPipe.key] ){
      return -1;
    }
    if ( a[OrderByPipe.key] > b[OrderByPipe.key] ){
      return 1;
    }
    return 0;
  }

  transform(value: any, orderBy: string, ascending: boolean): any {
    OrderByPipe.key = orderBy.toLowerCase() as keyof IProduct;
    let products = value as IProduct[];

    products = products?.sort(this.compare);

    return ascending ? products : products?.reverse();
  }

}
