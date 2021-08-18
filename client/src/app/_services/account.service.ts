import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//  Angular services are Singleton
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
