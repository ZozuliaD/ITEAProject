import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyDataService } from 'src/app/services/currency-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  
  from : string = "";
  to : string = "";
  convertFrom: string | null = localStorage.getItem("convertFrom");
  convertTo: string | null = localStorage.getItem("convertTo");
  money: number = 0;
  result : number = 0;
  
currencys: any = [
  { сс: "", rate: 0}
];

constructor (public api: CurrencyDataService){
  this.api.takeData().subscribe(data=>this.currencys=data)
}

fromInput(e: any){
  localStorage.setItem("convertFrom",e.target.value);
  this.convertFrom = localStorage.getItem("convertFrom");
   this.convertFrom = localStorage.getItem(e.target.value);
  }

toInput(e: any){
  localStorage.setItem("convertTo",e.target.value);
  this.convertTo = localStorage.getItem("convertTo");
  this.convertTo = localStorage.getItem(e.target.value);
}

  moneyInput(e : any): void{
    this.money = e.target.value;
    if (this.convertFrom=="UAH" && this.convertTo!=null) {
      this.result = Number(this.money)/this.currencys.find((dd: any) => dd.cc ===this.convertTo).rate;
    }
   if (this.convertTo=="UAH" && this.convertFrom!=null) {
      this.result = Number(this.money)*this.currencys.find((dd: any) => dd.cc ===this.convertFrom).rate;
    }
      console.log(this.result);
  }
  
}
