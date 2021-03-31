import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Flight } from '../entity/flight';
import { FlightSearchComponent } from './flight-search.component';
import { DummyFlightService, FlightService } from './flight.service';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ FlightSearchComponent ],
      // Globaler Scope
      providers: [{
        provide: FlightService,
        useClass: DummyFlightService
      }]
    })
    .compileComponents();

    // Lokalen Service überschreiben
    // TestBed.overrideComponent(FlightSearchComponent, {
    //   set: {
    //     providers:[
    //       {
    //         provide: FlightService,
    //         useClass: DummyFlightService
    //       }
    //     ]
    //   }
    // });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);

    // Zugriff Template:
    // fixture.debugElement
    // fixture.nativeElement
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should not have selected flights initially', () => {
    expect(component.selectedFlight).toBeUndefined();
  });


  // it('should not have selected flights initially', waitForAsync(() => {
  //   expect(component.selectedFlight).toBeUndefined();
  // }));

  // it('should not have selected flights initially', (done) => {
  //   expect(component.selectedFlight).toBeUndefined();
  //   done();
  // });

  it('should not load flights w/o from or to', () => {

    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);

  });

  it('should load flights with from and to', () => {

    const fs = fixture.debugElement.injector.get(FlightService);
    spyOn(fs, 'search').and.callThrough();
    // spyOn(fs, 'search').and.returnValue(of([{}, {}, {}] as Flight[]));
    // spyOn(fs, 'search').and.throwError(new Error("Kaffee!!!"))

    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();
    expect(component.flights.length).toBe(3);
    expect(fs.search).toHaveBeenCalled();
    expect(fs.search).toHaveBeenCalledTimes(1);
    expect(fs.search).toHaveBeenCalledWith('Hamburg', 'Graz');

  });

});
