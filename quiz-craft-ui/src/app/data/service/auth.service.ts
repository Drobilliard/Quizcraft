import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { CreateUser } from '../models/create-user-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public registerUser(userInfo: CreateUser): any {
    console.log('sending request to ' + this.url);
    return this.http.post(this.url + '/register', userInfo).pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }
}
