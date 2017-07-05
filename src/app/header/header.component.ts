import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logoImg: string;
  constructor() { 
  	this.logoImg = './../../assets/img/shared/header/newlogo1.png';
  }

  ngOnInit() {
  }

}
