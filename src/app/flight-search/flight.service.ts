import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entity/flight';


@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  search(from: string, to: string): Observable<Flight[]> {
    const headers = { // new HttpHeaders();
      Accept: 'application/json'
    };

    const params = {  from, to };

    const url = 'http://www.angular.at/api/flight';
    return this.http.get<Flight[]>(url, {headers, params});
  }
}

@Injectable()
export class DummyFlightService implements FlightService {

  search(from: string, to: string): Observable<Flight[]> {
    return of([
      {id: 1, from: 'München', to: 'Berlin', date: '2021-03-31T17:00+02:00'},
      {id: 2, from: 'München', to: 'Berlin', date: '2021-03-31T17:30+02:00'},
      {id: 3, from: 'München', to: 'Berlin', date: '2021-03-31T18:00+02:00'},
    ]);
  }
}

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
})
export abstract class FlightService {
  abstract search(from: string, to: string): Observable<Flight[]>;
}


