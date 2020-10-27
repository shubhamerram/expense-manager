import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserService } from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  constructor(
    private userService: UserService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  register(user:User) {
      this.userService.register(user).subscribe( (res) => {
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigate(['/dashboard/spends'])
      }, (error) => {
        console.log('error',error)
      })
  }
}
