import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { ProductService } from '../../../../services/product/product-service';
import { RouterLink } from '@angular/router';
import { FourProduct } from '../../../../shared/components/four-product/four-product';

@Component({
  selector: 'app-our-products',
  imports: [FourProduct,RouterLink],
  templateUrl: './our-products.html',
  styleUrl: './our-products.css',
})
export class OurProducts {
 products:any;
  constructor(private service :ProductService ){
    this.products=this.getAllProducts()
  }

  getAllProducts(){
    this.service.getProductByTypeSort("new").subscribe({
      next : (res:any)=>{
        this.products = res
        console.log(this.products)
      },
      error : (error)=> console.log(error)
    })
  }
}
