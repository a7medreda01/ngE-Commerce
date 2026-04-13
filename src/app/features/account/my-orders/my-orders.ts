import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderService } from '../../../services/order-service/order-service';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule,RouterModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css',
})
export class MyOrders {

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
  cancelOrder(){
    this.orderService.cancelOrder(this.selectedOrderId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.getOrders()
  this.showCancel = false;

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
