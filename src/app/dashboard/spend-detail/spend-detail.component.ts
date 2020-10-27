import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spends } from 'app/models/spends.model';
import { SpendsService } from 'app/services/spends.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import * as moment from 'moment';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-spend-detail',
  templateUrl: './spend-detail.component.html',
  styleUrls: ['./spend-detail.component.css']
})
export class SpendDetailComponent implements OnInit {

  spends: Spends[] = []
  total:number = 0;
  date_title:string;
  date=""
  constructor(
    private spendsService: SpendsService,
    private activedRoute: ActivatedRoute,
    private bottomSheet: MatBottomSheet
    ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(para => {
      this.date = para.get('date');
      this.getSpends(this.date);

    })
  }

  getSpends(dates) {
    this.spendsService.spends(dates).subscribe( res => {
      this.spends = res;
      this.total = res.reduce((total, spend:Spends) => {
        total += spend.amount;
        this.date_title = spend.date;
        return total
      }, 0)
    }, 
    error => {
      console.log(error)
    })
  }

  menu(spend) {
    this.bottomSheet.open(MenuComponent, {data:spend});
    let sheet = (this.bottomSheet._openedBottomSheetRef.instance.deleted).subscribe(res => {
      this.delete(res);
    })
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(res => sheet.unsubscribe())
  }

  delete(spend) {
    let index = this.spends.indexOf(spend);
    if(index) this.spends.splice(index,1);
    this.spendsService.delete(spend._id).subscribe(res=>{}, error=> {
      this.spends.splice(index,0,spend);
    })
  }
}

