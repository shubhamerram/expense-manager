import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/models/category.model';
import { CategorysService } from 'app/services/categorys.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category = new Category();
  id;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private categoryService: CategorysService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.getcategory();
    })
    
  }

  submit(form:Category) {
    form._id= this.id;
    this.categoryService.update(this.category).subscribe(res => {
      this.router.navigate(['/dashboard/category/'])
    }, error => {
      console.log(error);
    })
  }

  getcategory() {
     this.categoryService.category(this.id).subscribe(res => {
        this.category = res;

     }, error => {
       console.log(error)
     })
  }


}
