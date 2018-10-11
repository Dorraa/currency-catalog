import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrenciesService } from '../currencies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.css']
})
export class OneCurrencyComponent implements OnInit {

  //currencyDetails : CurrencyAttributes;
  //currencies : Array<Currency> = [];

  userId : number;
  user : object;
  isReady : boolean = false;

  constructor(private route : ActivatedRoute,private service : CurrenciesService) {
    this.route.params.subscribe(params => this.userId = params.id)
   }

  ngOnInit() {
    this.service.getById(this.userId).subscribe(data => {this.user = data;
      this.isReady = true;});
  }

}
