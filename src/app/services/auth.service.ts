import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from "rxjs";


@Injectable()
export class AuthService {
    constructor(){}
    private jwtHelper = new JwtHelperService()
    validateToken() {
        const user = JSON.parse(localStorage.getItem('user'))
        return this.jwtHelper.isTokenExpired(this.getToken())
    }

    getToken() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.token;
    }

    getUserDetails():Observable<any> {
        const user = JSON.parse(localStorage.getItem('user'));
        return of(user);
    }

}