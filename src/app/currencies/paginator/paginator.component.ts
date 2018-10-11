import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  // MatPaginator Inputs

  @Input()
  pageIndex: 0;

  @Input()
  length = 100;

  @Input()
  pageSize = 10;

  @Input()
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  pageEvent= PageEvent;

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor() {
    console.log('paginator constructor.')
   }

  ngOnInit(){

  }

  // mat paginator change
  getPaginatorData(event) {
    console.log('paginator data : ', event);
    this.messageEvent.emit(event);
  }
}

