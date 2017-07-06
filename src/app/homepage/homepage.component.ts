import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

happy_child: string;
  constructor() { 
  	this.happy_child ='./../../assets/images/happy_child.png';
  }

  ngOnInit() {
  }

}
