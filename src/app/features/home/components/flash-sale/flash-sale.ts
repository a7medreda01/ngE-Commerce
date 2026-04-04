import { Component } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product/product-service';
import { Product } from '../../../product/product/product';
import { FourProduct } from '../../../../shared/components/four-product/four-product';

@Component({
  selector: 'app-flash-sale',
  imports: [FourProduct,RouterLink],
  templateUrl: './flash-sale.html',
  styleUrl: './flash-sale.css',
})
export class FlashSale {


  products:any;
  constructor(private service :ProductService ){
    this.products=this.getAllProducts()
  }

  getAllProducts(){
    this.service.getProductByTypeSort("flash").subscribe({
      next : (res:any)=>{
        this.products = res
        console.log(this.products)
      },
      error : (error)=> console.log(error)
    })
  }

// timer slae 

  days = 5;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    let totalSeconds = 5 * 24 * 60 * 60; // 5 days

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;

        this.days = Math.floor(totalSeconds / (24 * 60 * 60));
        this.hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
      }
    }, 1000);
  }
}
