import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-banners',
  imports: [CommonModule],
  templateUrl: './first-banners.html',
  styleUrl: './first-banners.css',
})
export class FirstBanners {

  images = [
    'assets/images/banner6.png',
    'assets/images/banner7.jpg',
    'assets/images/banner3.jpg',
    'assets/images/banner4.jpg',
    'assets/images/banner2.jpg'
  ];

}
