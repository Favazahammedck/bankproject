import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your best banking parnter"
  accno = "enter your account number"

 

   acno = ""
   pwd =""

   
  constructor(private router :Router ,private  ds:DataService) { }

  ngOnInit(): void {
      
    }
    get_acno(event:any){
      console.log(event.target.value);
      this.acno = event.target.value
    }
    get_pswd(event:any){
      console.log(event.target.value);
      this.pwd = event.target.value      
    }

    login(a:any,p:any){

      var acno = this.acno
      var pwd = this.pwd
      const result = this.ds.login(acno,pwd)
      if(result){
        alert('successfully logged in')
        this.router.navigateByUrl('dashboard')
      }
      // var db = this.ds.database


      // if(acno in db){
        
      //   if(pwd==db[acno]["passWord"]){
      //   alert('login success')
      //   this.router.navigateByUrl("dashboard")
      //   }
      //   else{
      //     alert('invalid password')
          
      //   }
      // }else{
      //   alert("invalid username ");
        
      // }
      

      }
  }


