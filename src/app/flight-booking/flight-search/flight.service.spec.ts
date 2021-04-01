import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightService } from './flight.service';
import { Flight } from '../entity/flight';
import { of } from 'rxjs';

fdescribe('FlightService', () => {
  let service: FlightService;
  let ctrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(FlightService);
    ctrl = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {

    service.search('Graz', 'Hamburg').subscribe(flights => {
      expect(flights.length).toBe(3);
    });

    const req = ctrl.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');
    req.flush([{}, {}, {}] as Flight[]);

  });
});
