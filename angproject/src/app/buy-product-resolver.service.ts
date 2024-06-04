import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from './_model/product.model';
import { Observable, pipe } from 'rxjs';
import { ProductService } from './_service/product.service';
import { map } from 'rxjs/operators';
import { ImagesProcessingService } from './images-processing.service';

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService  implements Resolve<Product[]>{

  constructor(private productService: ProductService,
    private imageProcessingService: ImagesProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
   const id= route.paramMap.get("id");
   const isSingleProductCheckout=route.paramMap.get("isSingleProductCheckout");
   return this.productService.getProductDetails(isSingleProductCheckout,id)

   .pipe(
    map(
      (x:Product[],i) => x.map((product:Product) =>this.imageProcessingService.createImages(product))
    )
   );
  }
}
