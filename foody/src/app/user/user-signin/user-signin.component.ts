import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(private userService: UserService) { }

  email = "";
  password = "";

  ngOnInit(): void {
  }

  signin(){
    var user = {
      email: this.email,
      password: this.password
    }
    this.userService.signin(user)
    .subscribe(data => {
      if(data.status == 'login'){
        alert('login successful');
        localStorage.setItem('jwt-token',data.token);
        
      }
    })
  }

  open:boolean=true;
  hide:string="password";
  show(){
    this.open =! this.open;
    if(this.open){
      this.hide = "password";
    }else{
      this.hide = "text";
    }
    
  }

}
