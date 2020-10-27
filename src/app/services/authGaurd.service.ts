import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "../services/auth.service"

@Injectable()
export class AuthGaurdService implements CanActivate, CanActivateChild {
    
    constructor(
        private authService: AuthService,
        private router: Router
        ) {

    }
    canActivate() {
        if(!this.authService.validateToken()) {
            return true;
        }
        this.router.navigate(['/'])
        return false;

    }

    canActivateChild() {
        if(!this.authService.validateToken()) {
            return true;
        }
        this.router.navigate(['/'])
        return false;

    }
}