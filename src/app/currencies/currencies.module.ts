import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayerComponent } from './displayer/displayer.component';
import { OneCurrencyComponent } from './one-currency/one-currency.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayerComponent, OneCurrencyComponent, PageLoaderComponent]
})
export class CurrenciesModule { }
