import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product-service';
import { CategoryService } from '../../../services/category/category-service';

@Component({
  selector: 'app-filter',
  imports: [CommonModule,FormsModule ],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  filters: any = {
    search: null,
    category: null,
    min: null,
    max: null,
    rating: null
  };
  categories:any;
  constructor(private router: Router, private route: ActivatedRoute,private catService:CategoryService) {}

  ngOnInit(){
    this.getCatigories()
  }
  
  applyFilter() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.filters.search,
        category: this.filters.category,
        min: this.filters.min,
        max: this.filters.max,
        rating: this.filters.rating
      },
      queryParamsHandling: 'merge'
    });
  }



    getCatigories(){
    this.catService.getAllCategories().subscribe({
      next:(res:any)=> {
        this.categories=res
        console.log(this.categories)
      },
      error:(error:any)=>console.log(error)
    })
  }


  
}