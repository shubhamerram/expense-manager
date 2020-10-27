import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpendsService } from 'app/services/spends.service';
import { Spends1 } from '../../models/spends1.model';
import * as moment from "moment"

@Component({
  selector: 'app-spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.css']
})
export class SpendsComponent implements OnInit {

  spends:Spends1[] = [];
  date = moment().format('YYYY-MM-DD').toString();
  constructor(
    private spendsService: SpendsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listOfSpends();
  }

  listOfSpends() {
    this.spendsService.ListOfSpends().subscribe(res => {
      this.spends = res;
    })
  }

  spendDetails(date) {
    date = moment(date).format('YYYY-MM-DD').toString();
    this.router.navigate(['/dashboard/spends',date])
  }

  shareDate(date) {
    this.date = moment(date).format('YYYY-MM-DD').toString();
  }

}
