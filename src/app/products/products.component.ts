import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/model/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products : ProductRepresentation[] = [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : ProductService
  ){}



  param : any;   

  queryParam : any;

  ngOnInit() : void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['course'];

    // this.service.getAllProductsWithLimit().subscribe({
    //   next : (data) => {
    //     console.log(data);
    //     console.log("id:" +data[4].id);
    //   }
    // })
    
  this.service.getAllProductsWithLimit()
  .subscribe({
      next: (data) => {
        this.products = data ;
      },
      error: (error: HttpErrorResponse) => {
        if(error instanceof ErrorEvent){
          console.error(error);
        }else{
          console.error(`Server returned status code ${error.status} , error message : ${error.message}`);   
        }
      }
   });
      
  }
}
