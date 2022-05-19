import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) {
    this.productService.getProduct()
    .subscribe(data =>{
      this.products = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  public products:any;

}
