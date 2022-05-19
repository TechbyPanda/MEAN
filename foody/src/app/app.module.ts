import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminService } from './user/admin.service';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserService } from './user/user.service';
import { UserSigninComponent } from './user/user-signin/user-signin.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { YohooBabaNavigationComponent } from './yohoo-baba-navigation/yohoo-baba-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    UserSigninComponent,
    HomeComponent,
    ProductComponent,
    AdminDashboardComponent,
    AdminhomepageComponent,
    VerticalNavbarComponent,
    AdminDashboard2Component,
    YohooBabaNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
