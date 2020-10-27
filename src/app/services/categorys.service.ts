import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { root } from "rxjs/internal/util/root";
import { AuthService } from "./auth.service";
import { Config } from '../config/config'


@Injectable({
    providedIn:"root"
})
export class CategorysService {

    header = new HttpHeaders({
        Authorization:"Bearer "+this.auth.getToken()
    })
    api = new Config().api;

    constructor(
        private http:HttpClient,
        private auth:AuthService
    ) {}
    
    categorys():Observable<any> {
        return this.http.get(`${this.api}category`, {headers:this.header});
    }

    category(id):Observable<any> {
        return this.http.get(`${this.api}category/${id}`, {headers:this.header});
    }
    add(data):Observable<any> {
        return this.http.post(`${this.api}category`,data,{headers:this.header})
    }

    update(data):Observable<any> {
        return this.http.patch(`${this.api}category`,data,{headers:this.header})
    }
    delete(res):Observable<any> {
        return this.http.delete(`${this.api}category/${res}`, {headers:this.header});
    }
}