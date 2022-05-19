import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  signIn(admin:any):Observable<any>{
    var api = "http://localhost:3000/api/admin/signin";
    return this.http.post(api,admin);
  }

  checkToken(){
    return !!localStorage.getItem("jwt-token");
  }
}
