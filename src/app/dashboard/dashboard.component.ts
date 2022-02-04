import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ds:DataService) { }

  depoacno = ""
  depopswd =""
  depoamount = ""

  withamount = ""
  withacno = ""
  withpswd = ""

  deposit(){
    var acno = this.depoacno
    var pswd = this.depopswd
    var amount = this.depoamount

    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"deposited seccessfully and new amount is"+result)
    }
  }

  withdraw(){
    var acno = this.withacno
    var pswd = this.withpswd
    var amount = this.withamount

    const result = this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(amount+"amount withdrawed successfully and new amount is"+result)
    }

  }
  ngOnInit(): void {
  }

}
