import { Injectable } from '@angular/core';
import { CurrencyDataService } from 'src/app/services/currency-data.service';


@Injectable({
  providedIn: 'root'
})
export class SelectCurrencyTsService {
  currencys: any = [
    { сс: "", rate: 0}
  ];
	constructor (public api: CurrencyDataService){
	  this.api.takeData().subscribe(data=>this.currencys=data)
	}
}
