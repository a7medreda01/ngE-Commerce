import { Component } from '@angular/core';
import { Categories } from '../components/categories/categories';
import { FirstBanners } from '../components/first-banners/first-banners';
import { FlashSale } from '../components/flash-sale/flash-sale';
import { BrowseCategory } from '../components/browse-category/browse-category';
import { ThisMonth } from '../components/this-month/this-month';
import { CategoryBanner } from '../components/category-banner/category-banner';
import { OurProducts } from '../components/our-products/our-products';
import { NewArrival } from '../components/new-arrival/new-arrival';
import { Services } from '../components/services/services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Categories,FirstBanners,FlashSale,BrowseCategory,ThisMonth
    ,CategoryBanner,OurProducts,NewArrival,Services
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
