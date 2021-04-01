import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  constructor() { }
  
  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.select(this.tabs[0]);
    }
  }

  tabs: TabComponent[] = [];

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  select(tab: TabComponent): void {
    this.tabs.forEach(t => {
      t.active = (t === tab);
    });
  }

  ngOnInit(): void {
  }

}
