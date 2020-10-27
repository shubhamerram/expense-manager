import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'app/models/category.model';
import { CategorysService } from 'app/services/categorys.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();
  constructor(private categoryService: CategorysService, private router:Router) { }

  ngOnInit(): void {
  }
  submit(form:Category) {
    this.categoryService.add(form).subscribe(res => {
      this.router.navigate(['/dashboard/category/'])
    }, error => {
      console.log(error);
    })
  }

}
