import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { DisplayerComponent } from './currencies/displayer/displayer.component';
import { OneCurrencyComponent} from './currencies/one-currency/one-currency.component';
import { PageLoaderComponent} from './currencies/page-loader/page-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    OneCurrencyComponent,
    PageLoaderComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
