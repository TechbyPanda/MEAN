import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public signup = "http://localhost:3000/api/customer/signup";
  public signin = "http://localhost:3000/api/customer/signin";

  signupfun(name:any,email:any,password:any,image:any):Observable<any> {
    var customer = {
      name:name,
      email:email,
      image:image,
      password:password
    }
    return this.http.post(this.signup,customer);
  }

  public signinfun(email:string,password:string):Observable<any>{
    alert('service')
    console.log(email,password)
    return this.http.post(this.signin,{email:email,password:password});
  }
}
