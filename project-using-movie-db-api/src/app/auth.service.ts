import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserData:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient) {
      if(localStorage.getItem('token'))
      {
        this.savecurrentUserData()
      }
    

   }
  login(data: object): any{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`, data);
  }
  register(data: object): any{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`, data);

  }
  logout():any{
    this.currentUserData.next(null)
    localStorage.removeItem('token')
  }

  savecurrentUserData():any{
    let token:any = localStorage.getItem('token')
    let decosedToken:any = token;
    this.currentUserData.next(decosedToken)
  }
}
