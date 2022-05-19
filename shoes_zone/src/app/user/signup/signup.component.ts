import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService: CustomerService,) { }

  ngOnInit(): void {
  }


  public name: string ='';
  public email: string ='';
  public image: string ='';
  public password: string ='';

  signup(){
    this.customerService.signupfun(this.name, this.email, this.password,this.image)
    .subscribe(data => {
      alert('signup successful')
      console.log(data);
    })
  }

}
