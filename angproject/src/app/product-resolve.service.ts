import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from './_model/product.model';
import { Observable, of } from 'rxjs';
import { ProductService } from './_service/product.service';
import { ImagesProcessingService } from './images-processing.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product> {

  constructor(private productService : ProductService,
    private imageProcessingService: ImagesProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
   const id= route.paramMap.get("productId");


   if(id){
    //then we have to fetch details from backend
    return this.productService.getProductDetailsById(id).pipe(
      map(p => this.imageProcessingService.createImages(p))
    );

   } 
   else{
    //return empty product observable.
    return of(this.getProductDetails());
   }
  }

  getProductDetails(){
    return {
      productId:null,
      productName: "",
      productDescription: "",
      productDiscountedPrice: 0,
      productActualPrice: 0,
      productImages: []
    }
  }
}
