import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('https://jsonplaceholder.typicode.com/todos') //api for testing
    //return this.http.get('https://api.openfintech.io/v1/currencies')
  };

   // get currency by id
   getById(id : number){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/'+id); //api for testing
   // return this.http.get('https://api.openfintech.io/v1/currencies/'+id);
  }


}
