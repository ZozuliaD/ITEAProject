import { Component, Input, ViewChild} from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { CurrencyDataService } from 'src/app/services/currency-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
  
  from: string = "";
  to : string = "";
  money: number = 0;
  result : number = 0;
  result_ : string = "0";
  currencys: any = [
    { сс: "", rate: 0, txt: ""}
  ];

@ViewChild('form') form!:NgForm;
@Input() DDD:string = '';

constructor (public api: CurrencyDataService){
  this.api.takeData().subscribe(data=>this.currencys=data)
  this.from = localStorage.getItem("from")||"";
  this.to = localStorage.getItem("to")||"";
}

onSelectedFrom(value:string): void {
  this.from = value;
  localStorage.setItem("from",this.from);
}

onSelectedto(value:string): void {
  this.to = value;
  localStorage.setItem("to",this.to);
}

moneyInput(e : any): void{  
  console.log("3"+this.from);
  this.money = e.target.value;
  if (this.from=="UAH" && this.to!=null) {
     this.result = Number(this.money)/this.currencys.find((dd: any) => dd.cc ===this.to).rate;
   }
  if (this.to=="UAH" && this.from!=null) {
     this.result = Number(this.money)*this.currencys.find((dd: any) => dd.cc ===this.from).rate;
   }
     console.log(this.result);
}

}
  
  
