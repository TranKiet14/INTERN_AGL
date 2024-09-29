import { Injectable } from '@angular/core';
import { AppConfig } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = AppConfig.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/questions`);
  }
}
