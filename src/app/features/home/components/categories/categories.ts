import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category/category-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  categories:any
  constructor(private catService:CategoryService,private router: Router){}


  ngOnInit(){
this.getCatigories()
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

  goToCategory(id: number) {
  this.router.navigate(['/products'], {
    queryParams: { category: id }
  });}
}
