import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DisplayerComponent } from './currencies/displayer/displayer.component';
import { OneCurrencyComponent} from './currencies/one-currency/one-currency.component';
import { PageLoaderComponent} from './currencies/page-loader/page-loader.component';
import { PaginatorComponent} from './currencies/paginator/paginator.component';
import { FilterComponent} from './currencies/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    OneCurrencyComponent,
    PageLoaderComponent,
    PaginatorComponent,
    FilterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
