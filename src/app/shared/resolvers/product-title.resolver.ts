import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { take, Observable } from 'rxjs';
import { IProduct } from "src/app/products/models/product";
import { ProductService } from "src/app/products/services/product.service";

function getProduct(product: Observable<IProduct>) {
    return new Promise(resolve=>{
        product.pipe(
           take(1)
         )
         .subscribe(
            (data:any) => {
                console.log(data);
                resolve(data);
         });
    });
}

export const productTitleResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        var id = route.params["id"];
        if (!id)
        {
            return "Product";
        }

        var product = inject(ProductService).getProduct(id);
        var name = getProduct(product).then((p) => {
            return (p as IProduct).name;
        })
        return name;
    };