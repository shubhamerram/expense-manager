import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Config } from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = new Config().api;
  constructor(private http:HttpClient) { }
  register(user):Observable<any> {
      return this.http.post(`${this.api}users`,user)
  }

  login(user):Observable<any> {
    return this.http.post(`${this.api}users/login`, user)
  }
}
