import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { produce } from 'immer';
import { Flight } from '../../entity/flight';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightBookingApiModule } from '../flight-booking-api.module';

@Injectable()
export class DefaultFlightService implements FlightService {

  private flightsSubject = new BehaviorSubject<Flight[]>([]);
  flights$: Observable<Flight[]> = this.flightsSubject.asObservable();

  constructor(private http: HttpClient) { }

  find(from: string, to: string): void {
    this.search(from, to).subscribe({
      next: (flights) => {
        this.flightsSubject.next(flights);
      },
      error: (err) => {
        console.error('err', err)
      }
    })
  }

  search(from: string, to: string): Observable<Flight[]> {
    const headers = { // new HttpHeaders();
      Accept: 'application/json'
    };

    const params = {  from, to };

    const url = 'http://www.angular.at/api/flight';
    return this.http.get<Flight[]>(url, {headers, params});
  }


  delay() {
    const flights = this.flightsSubject.getValue();
    // const flight = flights[0];

    // // flight.date = new Date().toISOString();

    // const newFlight: Flight = {...flight, date: new Date().toISOString()};
    // const newFlights: Flight[] = [newFlight, ...flights.slice(1)];

    // #{ }


    // vvvv Add this one call (produce):
    const newFlights = produce(flights, flights => {
      const flight = flights[0];

      // Mutation!!!
      flight.date = new Date().toISOString();
    });

    this.flightsSubject.next(newFlights);

  }

  findById(id: string): Observable<Flight> {

    const headers = { // new HttpHeaders();
      Accept: 'application/json'
    };

    const params = { id };

    const url = 'http://www.angular.at/api/flight';
    return this.http.get<Flight>(url, {headers, params});
  };


}

@Injectable()
export class DummyFlightService implements FlightService {

  flights$: Observable<Flight[]>;

  search(from: string, to: string): Observable<Flight[]> {
    this.flights$ = of([
      {id: 1, from: 'München', to: 'Berlin', date: '2021-03-31T17:00+02:00'},
      {id: 2, from: 'München', to: 'Berlin', date: '2021-03-31T17:30+02:00'},
      {id: 3, from: 'München', to: 'Berlin', date: '2021-03-31T18:00+02:00'},
    ]);
    return this.flights$;
  }

  delay() {}
  find(from: string, to: string): void {}
  findById(id: string): Observable<Flight> { return null; };

}

@Injectable({
  providedIn: FlightBookingApiModule,
  useClass: DefaultFlightService
})
export abstract class FlightService {
  abstract findById(id: string): Observable<Flight>;

  flights$: Observable<Flight[]>;

  abstract search(from: string, to: string): Observable<Flight[]>;
  abstract delay();
  abstract find(from: string, to: string): void;

}


