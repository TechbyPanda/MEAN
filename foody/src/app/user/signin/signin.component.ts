import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private adminService: AdminService,private router : Router) { }

  ngOnInit(): void {
  }

  email = "";
  password = "";

  signin(){
    var admin = {
      email:this.email,
      password:this.password
    }
    this.adminService.signIn(admin)
    .subscribe(data => {
      console.log(data);
      if(data.status == "login success"){
        alert("Login success");
        this.router.navigate(["/admin-homepage"]);
        localStorage.setItem("jwt-token",data.token);
        
      }
      else{
        alert("Login error");
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
