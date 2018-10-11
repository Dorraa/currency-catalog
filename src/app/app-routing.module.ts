import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OneCurrencyComponent} from './currencies/one-currency/one-currency.component';
import {DisplayerComponent} from './currencies/displayer/displayer.component';


const routes: Routes = [
  {path : "" , component : DisplayerComponent},
  {path : "currency/:id" , component : OneCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
