import { Component, OnInit } from '@angular/core';
import { AdminService } from '../user/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    if(this.adminService.checkToken())
      return true;
    else
      return false;
  }

  menu:boolean = false;
  show(){
    this.menu =! this.menu;
  }

  signOut(){
    localStorage.removeItem('jwt-token');
    this.router.navigate(['admin/signin']);
  }

}
