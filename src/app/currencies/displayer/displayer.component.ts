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
  currencies :  Object[];

  constructor(private service : CurrenciesService) { }
  
  ngOnInit() {

    this.service.getAllCurrencies().subscribe(
      (data : Object[]) => {this.currencies   = data
      this.isReady = true;}
      );
    }
  }
