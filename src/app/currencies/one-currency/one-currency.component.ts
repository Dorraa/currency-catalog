import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrenciesService } from '../currencies.service';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';

@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.css']
})
export class OneCurrencyComponent implements OnInit {

  currencyId : number;
  currencyDetails : Currency;
  isReady : boolean = false;

  constructor(private route : ActivatedRoute,private service : CurrenciesService) {
    this.route.params.subscribe(params => this.currencyId = params.id)
   }

  ngOnInit() {
    this.service.getById(this.currencyId).subscribe((data : Currency) => {this.currencyDetails = data;
      this.isReady = true;},
      error => console.log ('err.'));
  }

}
