import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassengerMealService {
  constructor(private http: HttpClient) {}

  public getAllMeals(): Observable<any> {
    return this.http.get(`http://localhost:3000/mealAllowance`);
  }

  public getMealById(flightIdNumber: string): Observable<any> {
    const params: URLSearchParams = new URLSearchParams(); // unable to send this
    params.set('flightId', flightIdNumber);
    // this.options.search = params;

    return this.http.get(`http://localhost:3000/mealAllowance`, {
      params: { flightId: flightIdNumber },
    });
  }
}
