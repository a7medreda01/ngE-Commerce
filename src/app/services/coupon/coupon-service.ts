import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
     constructor(private http: HttpClient) {
   }
      ApplyCoupon(body:any) {
        console.log(body)
        return this.http.post(`${environment.baseUrl}Coupon/apply`,body);
      }
    
}
