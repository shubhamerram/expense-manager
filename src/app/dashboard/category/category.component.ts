import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Category } from 'app/models/category.model';
import { CategorysService } from 'app/services/categorys.service';
import { Observable } from 'rxjs';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys:Category[] = [];
  constructor(private categoryService: CategorysService, private bottomSheet:MatBottomSheet) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys() {
    this.categoryService.categorys().subscribe((res) => {
      this.categorys = res;
    }, error => {

    })
  }

  
  menu(category) {
    this.bottomSheet.open(CategoryMenuComponent, {data:category});
    let sheet = (this.bottomSheet._openedBottomSheetRef.instance.deleted).subscribe(res => {
      this.delete(res);
    })
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(res => {
      sheet.unsubscribe();
    })
  }

  delete(category) {
    
    let index = this.categorys.indexOf(category);
    if(index)
    this.categorys.splice(index,1);
    this.categoryService.delete(category._id).subscribe(res=>{}, error => {
      this.categorys.splice(index,0,category);
    })
  }
}
