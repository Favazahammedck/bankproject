import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


registerForm=this.fb.group({
    acno:[''],
    pswd:[''],
    name:['']
  })


  constructor(private ds:DataService,private router :Router ,private fb:FormBuilder ) { }
  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm);
    
  
  
    var uname =this.registerForm.value.name    
    var acno = this.registerForm.value.acno
    var password = this.registerForm.value.pswd

    const result = this.ds.register(acno,uname,password)
    if(result){
      alert('successfully registered')
      this.router.navigateByUrl("")
      

    }else{
      alert("user already exist")
      
    }
  }
}
