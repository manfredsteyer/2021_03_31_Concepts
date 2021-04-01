import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TableFieldDirective } from './table-field.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;

  get fieldList() {
    return this.fields?.toArray();
  }

  @Input() data: Array<unknown> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
