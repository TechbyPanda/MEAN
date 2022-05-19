import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private customer:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  public email: string = '';
  public password: string = '';

  signin(){
    this.customer.signinfun(this.email, this.password)
    .subscribe(data => {
      if(data.status == 'login success'){
        alert('Login Success')
        this.router.navigate(['']);
        sessionStorage.setItem('userID',data.current_user._id);
      }else{
        alert('invalid username');
      }
    })
  }

}
