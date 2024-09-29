import { Injectable } from '@angular/core';
import { AppConfig } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = AppConfig.apiUrl + "/categories"
  private selectedItem: any
  constructor(
    private http: HttpClient
  ) { }
  setSelected(value: any) {
    this.selectedItem = value; 
  }

  getSelected() {
    return this.selectedItem;
  }
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getAllParentCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parent`);
  }

  getCategoriesByParentID(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/children/${id}`);
  }
}
