import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category-model';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CategoryService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081/api/v1/category';
  }
  public getAllCategory(): any {
    return this.http.get(this.url);
  }
  public addCategory(category: any): any {
    return this.http.post(this.url, category);
  }
}
