import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DisplayerComponent } from './currencies/displayer/displayer.component';
import { OneCurrencyComponent} from './currencies/one-currency/one-currency.component';
import { PageLoaderComponent} from './currencies/page-loader/page-loader.component';
import { PaginatorComponent} from './currencies/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    OneCurrencyComponent,
    PageLoaderComponent,
    PaginatorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
