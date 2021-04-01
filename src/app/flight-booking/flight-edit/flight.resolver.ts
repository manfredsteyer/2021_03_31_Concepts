import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Flight } from '../../entity/flight';
import { FlightBookingApiModule } from '../flight-booking-api.module';
import { FlightService } from '../flight-search/flight.service';

@Injectable({ providedIn: FlightBookingApiModule })
export class FlightResolver implements Resolve<Flight> {
    
    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Flight> | Promise<Flight> | Flight {
        console.debug('resolve');
        return this.flightService.findById(route.params['id']).pipe(
            delay(7000)
        )
    }

}


