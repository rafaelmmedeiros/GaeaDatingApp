import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

//  Angular services are Singleton
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currenUserSource = new ReplaySubject<User>(1); //  ReplaySubjects work as a buffer object
  currentUser$ = this.currenUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response; //  RxJS operator https://rxjs.dev/
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currenUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currenUserSource.next(user);
        }
        //return user;
      })
    );
  }

  setCurrentUser(user: User) {
    this.currenUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currenUserSource.next(null);
  }
}
