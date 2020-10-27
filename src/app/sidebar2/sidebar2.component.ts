import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ROUTES } from './sidebar-routes.config';
import { Router } from '@angular/router';


@Component({
  selector: 'sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {
  public menuItems: object;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  ngOnInit() {
    this.menuItems = ROUTES
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

}
