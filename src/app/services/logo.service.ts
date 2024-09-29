import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private apiUrl = AppConfig.apiUrl + "/logos"
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
