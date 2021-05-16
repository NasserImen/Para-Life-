import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  url = '/api'
  constructor(private http : HttpClient) { }
  isLoginSubject = new BehaviorSubject<boolean>(false)

  public isAutentificated ():boolean {
    const token = localStorage.getItem('token')

    if (token){
      return (true)
    }else{
      return (false)
    }
  }

  register(user):Observable<any>{
    return this.http.post<any>(this.url + '/user/register' , user)
  }
login(user):Observable<any>{
  return this.http.post<any>(this.url + '/user/login' , user)
}
}
