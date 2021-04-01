import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  page: number;

  constructor() { }

  ngOnInit(): void {
  }

  doIT() {
    console.debug('done!');
  }

}
