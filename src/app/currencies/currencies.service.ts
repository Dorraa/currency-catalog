import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from './models/filter';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

   //get currencies from json file
   getCurrencies(){
    return this.http.get('../assets/json/currencies.json')
  };

  //get currencies from api
  getAllCurrencies(){
    //return this.http.get('https://jsonplaceholder.typicode.com/todos') //api for testing
    return this.http.get('https://api.openfintech.io/v1/currencies')
  };

   // get currency by id
   getById(id : number){
   // return this.http.get('https://jsonplaceholder.typicode.com/todos/'+id); //api for testing
    return this.http.get('https://api.openfintech.io/v1/currencies/'+id);
  }

   //get currency with pagination option
   getPaginatedCurrencies(pageNumber : number, pageSize : number){
    return this.http.get('https://api.openfintech.io/v1/currencies?page%5Bnumber%5D='+pageNumber+'&page%5Bsize%5D='+pageSize)
  };

   // get filteredData //sending filter option and word in the request body
   getFilteredData(filter : Filter){
    return this.http.post("https://api.openfintech.io/v1/currencies/",filter);
  }

}
