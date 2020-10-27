import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Config } from '../config/config'

@Injectable(
    {
        providedIn:"root"
    }
)
export class SpendsService {
  
    api = new Config().api;
    constructor(
        private http:HttpClient,
        private auth: AuthService
    ) {}
    header = new HttpHeaders({
        Authorization: "Bearer "+this.auth.getToken()
    });

    add(data):Observable<any> {
        return this.http.post(`${this.api}spends`,data,{headers:this.header})
    }

    update(data):Observable<any> {
        return this.http.patch(`${this.api}spends`,data,{headers:this.header})
    }
    ListOfSpends():Observable<any> {
       
        return this.http.get(`${this.api}spends-details`,{headers: this.header})
    }

    spend(id):Observable<any> {
        return this.http.get(`${this.api}spends/${id}`, {headers:this.header});
    }

    spends(date):Observable<any> {
        return this.http.get(`${this.api}spends?date=${date}`,{headers: this.header});
    }

    delete(id):Observable<any> {
        return this.http.delete(`${this.api}spends/${id}`, {headers:this.header});
    }
}