import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
   constructor(private http: HttpClient) {
  }
    getAllCategories(): Observable<any> {
      const result = this.http.get(`${environment.baseUrl}ProductTypes`);
      console.log(result);
      return result;
    }
}
