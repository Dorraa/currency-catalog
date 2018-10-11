import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/filter';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterOptions: Object[] = [{value: 'id', viewValue: 'Currency ID'},
  {value: 'code', viewValue: 'Currency Code'},
  {value: 'type', viewValue: 'Currency Type'},
  {value: 'name', viewValue: 'Currency Name'}];

  filter = new Filter();

  @Output()
  messageEvent = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit() {
  }

  filterData(){
   this.messageEvent.emit(this.filter);
  }

}

