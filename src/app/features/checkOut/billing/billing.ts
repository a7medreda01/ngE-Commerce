import { Component } from '@angular/core';
import { OrderService } from '../../../services/order-service/order-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  imports: [ReactiveFormsModule],
  templateUrl: './billing.html',
  styleUrl: './billing.css',
})
export class Billing {
  userId: string | null = localStorage.getItem('userId');

constructor(private orderService:OrderService,private router :Router){}
  orderForm: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    appartment: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
  })

createOrder(){
  console.log("start create")
  const body= {
  userId:this.userId,
  name: this.orderForm.get('name')?.value,
  address: this.orderForm.get('appartment')?.value +"/"+  this.orderForm.get('address')?.value +" - " +this.orderForm.get('city')?.value,
  phone: this.orderForm.get('phone')?.value,
}
  this.orderService.createOrder(body).subscribe({
    next:(res:any)=>{
  console.log(" created")
      console.log(res)
     this.router.navigate(['/order-success'])
    },
    error:(error:any)=>console.log(error)
  })
}
}
