import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { PagerComponent } from '../pager/pager.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  //@ContentChild(TabComponent)
  // @ContentChild('handle')

  @ViewChild(PagerComponent)
  pager: PagerComponent;

  constructor() { }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.tabs.length > 0) {
      setTimeout(() => this.select(this.tabs[0]), 0);
    }
  }

  // tabs: TabComponent[] = [];
  get tabs(): TabComponent[] {
    return this.tabList.toArray();
  }

  select(tab: TabComponent): void {
    this.tabs.forEach((t, i) => {
      t.active = (t === tab);
      if (t === tab) {
        this.pager.page = i;
      }
    });
  }

  ngOnInit(): void {
  }

}
