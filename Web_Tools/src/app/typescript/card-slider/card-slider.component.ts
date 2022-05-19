import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  constructor() {
    console.log()
   }

  ngOnInit(): void {
  }

  public slider:any;
  public item:any;
  next(){
    
  }

  prev(){

  }

}
