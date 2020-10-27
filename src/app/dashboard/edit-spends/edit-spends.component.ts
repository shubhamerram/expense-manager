import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/models/category.model';
import { Spends } from 'app/models/spends.model';
import { CategorysService } from 'app/services/categorys.service';
import { SpendsService } from 'app/services/spends.service';
import * as moment from "moment"

@Component({
  selector: 'app-edit-spends',
  templateUrl: './edit-spends.component.html',
  styleUrls: ['./edit-spends.component.css']
})
export class EditSpendsComponent implements OnInit {

  id="";
  date="";
  categorys: Category[] = []
  spend:Spends = new Spends();
  constructor(
    private activatedRoute:ActivatedRoute,
    private categoryService:CategorysService,
    private spendService: SpendsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.getCategorys();
    this.getSpend();
  }

  submit(form:Spends) {
    form._id= this.id;
    this.spendService.update(this.spend).subscribe(res => {
      this.router.navigate(['/dashboard/spends/',this.date])
    }, error => {
      console.log(error);
    })
  }

  getSpend() {
     this.spendService.spend(this.id).subscribe(res => {
        this.spend = res;
        this.date = moment(this.spend.date).format('YYYY-MM-DD').toString();

     }, error => {
       console.log(error)
     })
  }

  getCategorys() {
    this.categoryService.categorys().subscribe(res => {
      this.categorys = res;
    },
    error=> {

    })
  }

}
