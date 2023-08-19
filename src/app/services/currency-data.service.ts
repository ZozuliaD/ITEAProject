
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(public api :HttpClient) { }

  takeData(){
    return this.api.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }
}
