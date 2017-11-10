import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  inputs:['username']
})
export class LoginComponent implements OnInit {

  login ={
    username:"admin",
    password:"admin"
  }

  username='';
  password='';
  isValidLogin = false;
  isLoginFailed = false;

  constructor() { }

  ngOnInit() { }

  authenticateUser(){
    if(this.username==this.login.username && this.password==this.login.password){
        this.isValidLogin = true
    }
    else{
        this.isLoginFailed = true
    }
  }

  loginUser(){
    alert("login successful")
  }
}
