import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  imports: [ CommonModule],
  templateUrl: './new-arrival.html',
  styleUrl: './new-arrival.css',
})
export class NewArrival {
banners = [
    'assets/images/banner1.jpg',
    'assets/images/banner2.jpg',
    'assets/images/banner3.jpg',
    'assets/images/banner4.jpg',
  ];
}
