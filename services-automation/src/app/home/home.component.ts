import { Component, OnInit } from '@angular/core';
import { Home } from '../home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: Home = {
    title: 'This is Sample Tool'
  }

  constructor() { }

  ngOnInit() {
  }


}
