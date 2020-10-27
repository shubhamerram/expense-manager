import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user:User = new User();
  subscribe;
  error ="";
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
    ) { }


  ngOnInit() {
    if(this.authService.getToken()) {
      this.router.navigate(['/dashboard/']);
    }
  }

  login(user) {
    this.subscribe = this.userService.login(user).subscribe((res) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/dashboard/spends'])

    },
    (e:any) => {
      console.log("errr",e.error.error)
      this.error = e.error.error;
    })
  }

  ngOnDestroy() {
    if(this.subscribe) {
      this.subscribe.unsubscribe()
    }
  }
}
