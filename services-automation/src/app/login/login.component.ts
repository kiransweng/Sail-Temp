import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  inputs:['username']
})
export class LoginComponent implements OnInit {

  steps = [
    {name:'blank', value:'           '},
    {name:'verifyStatusCode', value:'Verify Status Code'},
    {name:'getMethod', value:'GET Method'},
    {name:'postMethod', value:'POST Method'},
    {name:'patchMethod', value:'PATCH Method'},
    {name:'deleteMethod', value:'DELETE Method'}
  ];

  selectedStepValue: string;

  isSelectedStepMatches(stepName):boolean{
    let nameObj = this.steps.find(res => res.value === this.selectedStepValue);
    if (nameObj.name === stepName) {
        this.selectedStepValue = ''
        return true;
    }
    return false;
  }







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
