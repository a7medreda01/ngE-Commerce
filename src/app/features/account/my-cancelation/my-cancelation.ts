import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderService } from '../../../services/order-service/order-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-cancelation',
  imports: [CommonModule,RouterLink],
  templateUrl: './my-cancelation.html',
  styleUrl: './my-cancelation.css',
})
export class MyCancelation {
  constructor(private orderService: OrderService) {
    this.getOrders()
   }
  orders: any;
  getOrders() {
    this.orderService.getUserOrders().subscribe({
      next: (res: any) => {
        this.orders = res
        console.log(res)
      },
      error: (error: any) => console.log(error)
    })
  }


  showCancel = false;
selectedOrderId!: number ;

openCancel(id: number) {
  this.selectedOrderId = id;
  this.showCancel = true;
}

closeCancel() {
  this.showCancel = false;
}



}