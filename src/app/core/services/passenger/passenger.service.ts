import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  public getAllPassengers(): Observable<any> {
    return this.http.get(`http://localhost:3000/passengers`);
  }

  public getFilteredPassengers(filters: {}): Observable<any> {
    return this.http.get(`http://localhost:3000/passengers`);
  }
}
