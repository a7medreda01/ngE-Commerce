import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {

  }
  getProducts(
    search?: string,
    min?: number,
    max?: number,
    type?: string,
    category?: number,
    rating?: number
  ) {
    let params: any = {};

    if (search) params.Search = search;
    if (min) params.MinPrice = min;
    if (max) params.MaxPrice = max;
    if (type) params.Type = type;
    if (category) params.ProductTypeId = category;
    if (rating) params.Rating = rating;


    return this.http.get(`${environment.baseUrl}products`, { params });
  }
  getAllProducts(): Observable<any> {
    const result = this.http.get(`${environment.baseUrl}products`);
    console.log(result);
    return result;
  }
  getProductById(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}products/${id}`);
  }
  getProductByTypeSort(typeSort: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}products?type=${typeSort}`);
  }
  getProductByCategory(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}products?ProductTypeId=${id}`);
  }
  getProductBySearch(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}products/${id}`);
  }
}
