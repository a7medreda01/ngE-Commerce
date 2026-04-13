import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { OrderService } from '../../../../services/order-service/order-service';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {

  order: any;
  orderId:any

  orderSteps = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];

  constructor(private orderService:OrderService,private route:ActivatedRoute){}
  getOrderId(){
     this.orderId = this.route.snapshot.paramMap.get('id');
     this.orderService.getUserOrderId(this.orderId).subscribe({
      next:(res:any)=>{
        this.order=res
      },
      error:(error:any)=>console.log(error)
     })
  }

  ngOnInit() {
this.getOrderId()
  }

  getStepIndex(status: string) {
    return this.orderSteps.indexOf(status);
  }
}
