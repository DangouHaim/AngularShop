import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { IProduct } from "src/app/products/models/product";
import { ProductService } from "src/app/products/services/product.service";
import { wait } from "../extentions/Wait";

export const productTitleResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        var id = route.params["id"];
        if (!id)
        {
            return "Product";
        }

        var product = inject(ProductService).getProduct(id);
        var name = wait<IProduct>(product).then(x => x.name);
        return name;
    };