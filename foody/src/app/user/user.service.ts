import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(user:any):Observable<any>{
    console.log(user);
    var api = "http://localhost:3000/api/user/signup";
    return this.http.post(api,user);
  }

  signin(user:any):Observable<any>{
    var api = "http://localhost:3000/api/user/signin";
    return this.http.post(api,user)
  }
  
}
