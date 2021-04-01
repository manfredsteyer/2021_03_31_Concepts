import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'flight-app', // <flight-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Hello World!';
  showLoadingIndicator = false;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
      debounceTime(300)
    ).subscribe(e => {

      if (e instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      else if (e instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

    })
  }
}
