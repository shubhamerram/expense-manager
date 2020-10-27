import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Output() shareDate = new EventEmitter<any>();
  date = new Date();
  user:User = new User();
  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  menuClick() {
   document.getElementById('sidebar').style.display = 'block';
   document.getElementById('sidebar').style.zIndex = '1000';
   document.getElementById('sidebar').style.width = '100%';
  }
  selectedDate() {
    this.shareDate.emit(this.date);
  }

  getUserDetails() {
    this.authService.getUserDetails().subscribe(res => {
      this.user = res;
    });
  }
}
