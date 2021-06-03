import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  // private allFlightsSubject: BehaviorSubject<any>;
  // public allFlights: Observable<any>;

  constructor(private http: HttpClient) {}

  public getAllFlights(): Observable<any> {
    return this.http.get(`http://localhost:3000/flights`);
    // return this.http.get(`http://localhost:3000/users`).pipe(
    //   map((userDataResponse) => {
    //     // console.log('FETCHED USER DATA RESPONSE', userDataResponse);

    //     this.allFlightsSubject.next(userDataResponse);
    //     return userDataResponse;
    //   })
    // );
  }

  public getFlightById(flightIdNumber: string): Observable<any> {
    const params: URLSearchParams = new URLSearchParams(); // unable to send this
    params.set('flightId', flightIdNumber);
    // this.options.search = params;

    return this.http.get(`http://localhost:3000/flights`, {
      params: { flightId: flightIdNumber },
    });
  }
}
