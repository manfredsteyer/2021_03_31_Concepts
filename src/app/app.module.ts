import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';

const DEBUG = false;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      SharedModule.forRoot(),

      // Would prevent lazy loading!!
      // FlightBookingModule, // <-- Lazy!!
      RouterModule.forRoot(APP_ROUTES),
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
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
