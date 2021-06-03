import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  private hardcodedToken: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('_USERDATA')) // null if the localStorage key not rexist
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  public get tokenValue(): string {
    return this.hardcodedToken;
  }

  public login(username: string, password: string): Observable<any> {
    return this.http
      .get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      )
      .pipe(
        map((userDataResponse) => {
          // console.log('FETCHED USER DATA RESPONSE', userDataResponse);
          localStorage.setItem('_USERDATA', JSON.stringify(userDataResponse));
          this.userSubject.next(userDataResponse);
          return userDataResponse;
        })
      );
  }

  public logout(): void {
    // remove user from local storage and set userSubject to null
    localStorage.removeItem('_USERDATA');
    this.userSubject.next(null);
  }
}
