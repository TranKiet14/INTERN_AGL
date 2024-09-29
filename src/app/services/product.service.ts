import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = AppConfig.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  getProductsByCategorySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/category/${slug}`);
  }
}
