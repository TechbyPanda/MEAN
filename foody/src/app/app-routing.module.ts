import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserSigninComponent } from './user/user-signin/user-signin.component';

const routes: Routes = [
  {path:'admin/signin',component:SigninComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'signin',component:UserSigninComponent},
  {path: 'home',component:HomeComponent},
  {path:'admin-homepage',component:AdminhomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
