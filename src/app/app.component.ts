import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progect';
  from : string = "";
  to : string = "";
  money: number = 0;
  //calc : number = 0;
  result : number = 0;
  data = [
    { key: "USDUSD", value: "1"},
    { key: "USDEUR", value: "1.1"},
    { key: "USDPLN", value: "4.07"},
    { key: "USDUAH", value: "36.74"},
    { key: "EURUSD", value: "1.1"},
    { key: "EUREUR", value: "1"},
    { key: "EURPLN", value: "4.46"},
    { key: "EURUAH", value: "40.25"}, 
    { key: "PLNUSD", value: "0.25"},
    { key: "PLNEUR", value: "0.22"},
    { key: "PLNPLN", value: "1"},
    { key: "PLNUAH", value: "9.03"}, 
    { key: "UAHUSD", value: "0.027"},
    { key: "UAHEUR", value: "0.025"},
    { key: "UAHPLN", value: "0.11"},
    { key: "UAHUAH", value: "1"}];

  fromInput(e : any): void{
    this.from = e.target.value;
    console.log(this.result);
  }

  toInput(e : any): void{
    this.to = e.target.value;
    console.log(this.result);
  }

  moneyInput(e : any): void{
    let output = Object.fromEntries(this.data.map(v => [v.key, v.value]));
    this.money = e.target.value;
      console.log(this.from + this.to + "=" + output[this.from + this.to]);
      this.result = Number(this.money) * Number(output[this.from + this.to]);
      //this.result = this.money + " " + this.from + " = " + this.calc + " " + this.to;
      console.log(this.result);
  }

}
