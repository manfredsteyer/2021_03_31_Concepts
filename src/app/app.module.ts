import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { DefaultFlightService, DummyFlightService, FlightService } from './flight-search/flight.service';

const DEBUG = false;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent
   ],
   providers: [
      // {
      //    provide: FlightService,
      //    //useClass: DummyFlightService
      //    useFactory: (http: HttpClient) => {
      //       if (DEBUG) {
      //          return new DummyFlightService();
      //       } else {
      //          return new DefaultFlightService(http);
      //       }
      //    },
      //    deps: [HttpClient]
      // }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
