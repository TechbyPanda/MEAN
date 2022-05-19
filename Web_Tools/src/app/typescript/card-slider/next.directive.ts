import { Directive , ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) { 
    console.log(this.el.nativeElement);
  }

  @HostListener('click')
  next(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item')
    elm.append(item[0]);
  }

}
