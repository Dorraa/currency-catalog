import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';


@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit {


    isReady : boolean = false;
    currencies :  Currency[];

    constructor(private service : CurrenciesService) { }
  
    ngOnInit() {

    this.service.getAllCurrencies().subscribe(
      (data : Currency[]) => {this.currencies   = data
      this.isReady = true;},
      error => console.log ('err.')
      );
    }

    receivePaginatedData(event) {
      console.log("receiveMessage ", event);
      this.isReady = false;
      this.service.getPaginatedCurrencies(event.pageIndex , event.pageSize)
        .subscribe((data : Currency[]) => {
          this.currencies = data;
          this.isReady = true;
        },
        error => console.log ('err.')
        );
    }

    filterChanged(event) {
      console.log('filter changed : ', event);
      this.isReady = false;
      this.service.getFilteredData(event)
        .subscribe((data : Currency[]) => {
          this.currencies = data;
          this.isReady = true;
        },
        error => console.log ('err.')
        );
    }


  }
