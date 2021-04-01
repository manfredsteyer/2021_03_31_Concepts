import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entity/flight';
import { DummyFlightService, FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [
  //   { provide: FlightService, useClass: DummyFlightService }
  // ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket = {
    3: true,
    5: true,
  };


  flights$ = this.flightService.flights$;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {

    if (!this.from || !this.to) {
      return;
    }

    this.flightService.find(this.from, this.to);
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

  delay() {
    this.flightService.delay();


  }

}
