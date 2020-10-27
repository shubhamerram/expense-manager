import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/models/category.model';
import { Spends } from 'app/models/spends.model';
import { CategorysService } from 'app/services/categorys.service';
import { SpendsService } from 'app/services/spends.service';

@Component({
  selector: 'app-add-spends',
  templateUrl: './add-spends.component.html',
  styleUrls: ['./add-spends.component.css']
})
export class AddSpendsComponent implements OnInit {

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
      this.date = param.get('date');
    })
    this.getCategorys();
  }

  submit(form:Spends) {
    form.date= this.date;
    this.spendService.add(form).subscribe(res => {
      this.router.navigate(['/dashboard/spends/',this.date])
    }, error => {
      console.log(error);
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
