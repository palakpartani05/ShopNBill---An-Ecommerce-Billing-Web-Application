import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Product Name', 'Name', 'Contact No.'];
  dataSource = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin()
  }
  getAllOrderDetailsForAdmin(){
    this.productService.getAllOrderDetailsForAdmin().subscribe(
      (resp) =>{
        this.dataSource=resp;
        console.log(resp);

      }, (error) =>{
        console.log(error);

      }
    );
  }

}
