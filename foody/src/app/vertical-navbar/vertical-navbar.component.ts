import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu:boolean = false;
  show(){
    this.menu =! this.menu;
  }
}
