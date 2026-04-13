import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { ProductService } from '../../../../services/product/product-service';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../../models/product-model';
import { FourProduct } from '../../../../shared/components/four-product/four-product';

@Component({
  selector: 'app-this-month',
  imports: [FourProduct,CommonModule],
  templateUrl: './this-month.html',
  styleUrl: './this-month.css',
})
export class ThisMonth {
 products:any;
  constructor(private service :ProductService,private router :Router ){
    this.products=this.getAllProducts()
    
  }

  getAllProducts(){
    this.service.getProductByTypeSort("best").subscribe({
      next : (res:any)=>{
        this.products = res
        console.log(this.products)
      },
      error : (error)=> console.log(error)
    })
  }
    goToProducts(){
    this.router.navigate(['/products'],{
      queryParams:{
        type:'best'
      }
    })
  }
  
}
