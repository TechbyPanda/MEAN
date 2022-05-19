import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card1Component } from './cards/card1/card1.component';
import { Card2Component } from './cards/card2/card2.component';
import { Form1Component } from './forms/form1/form1.component';
import { CardSliderComponent } from './typescript/card-slider/card-slider.component';
import { NextDirective } from './typescript/card-slider/next.directive';
import { PrevDirective } from './typescript/card-slider/prev.directive';
import { Form2Component } from './forms/form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    Form1Component,
    CardSliderComponent,
    NextDirective,
    PrevDirective,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
