import { Component, Input } from '@angular/core';
import { Items } from '../items/items';
import { Filter } from '../filter/filter';
import { ProductService } from '../../../services/product/product-service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [Items, Filter],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products: any;
  constructor(private service: ProductService, private route: ActivatedRoute) {
    // this.products = this.getAllProducts()
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const search = params['search'];
      const min = params['min'];
      const max = params['max'];
      const type = params['type'];
      const category = params['category'];
      const rating = params['rating'];
      const pageSize = params['pageSize'];

      this.loadProducts(search, min, max, type, category,rating,120);
    });
  }
  loadProducts(search?: string, min?: number, max?: number, type?: string, category?: number,rating?:number,pageSize?:number) {
    this.service.getProducts(search, min, max, type, category,rating,pageSize).subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.log(err)
    });
  }
  // getAllProducts(){
  //   const typeSort =String(this.route.snapshot.paramMap.get("type"))
  //   this.service.getProductByTypeSort(typeSort).subscribe({
  //     next : (res:any)=>{
  //       this.products = res
  //       console.log(this.products)
  //     },
  //     error : (error)=> console.log(error)
  //   })
  // }
}
