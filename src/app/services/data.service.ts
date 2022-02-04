import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { acno: 1000, uname: "awin", password: 123, balance: 2000 },
    1001: { acno: 1001, uname: "awin", password: 1111, balance: 5000 },
    1002: { acno: 1002, uname: "awin", password: 123, balance: 2000 },
    1003: { acno: 1003, uname: "awin", password: 123, balance: 2000 },

  }
  constructor() { }

  register(acno: any, uname: any, password: any) {



    let db = this.database
    if (acno in db) {

      return false

    } else {
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(this.register)

      return true
    }
  }


  login(acno: any, password: any) {
    let db = this.database
    if (acno in db) {
      if (password == db[acno]["password"]) {
        return true
      } else {
        alert("invalid password")
        return false
      }
    } else {
      alert("invalid account number")
      return false
    }
  }

  deposit(acno:any,password:any,amt:any){
    let amount  = parseInt(amt)
    let db = this.database
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }else{
        alert("password missmatch")
        return false
      }

    }else{
      alert('user not found')
      return false
    }
  }

  withdraw(acno:any,password:any,amt:any){
    let amount = parseInt(amt)
    let db = this.database

    if(acno in db){
      if(password == db[acno]["password"]){
        if(db[acno]["balance"]>amount){
          db[acno]["balance"]-=amount
          return db[acno]["balance"]
        }else{
          alert("insuffcient balance")
        }
      
      }else{
        alert('password missmach')
        return false
      }
    }else{
      alert('user not found')
      return false
    }
  }
}
