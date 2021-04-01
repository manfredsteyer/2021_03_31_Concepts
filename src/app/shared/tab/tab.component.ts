import { Component, Input, OnInit } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() title: string;
  active: boolean;

  constructor(private pane: TabbedPaneComponent) { }

  ngOnInit(): void {
    this.pane.register(this);
  }

}
