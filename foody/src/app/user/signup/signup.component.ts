import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  public name = "";
  public email = "";
  public password = "";

  signup(){
    var user = {
      name : this.name,
      email : this.email,
      password : this.password
    }
    console.log("user: ");
    console.log(user.name);
    this.userService.signup(user)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/signin']);
    });
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
