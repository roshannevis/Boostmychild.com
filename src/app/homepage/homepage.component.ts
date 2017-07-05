import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
newOne: string;
  constructor() { 
  	this.newOne = './../../assets/img/new1.jpg';
  }

  ngOnInit() {
  }

}
