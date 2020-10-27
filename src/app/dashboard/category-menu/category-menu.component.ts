import { EventEmitter, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  deleted = new EventEmitter();
  constructor(private bottomSheetRef: MatBottomSheetRef<CategoryMenuComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data:any) { 
  }

  ngOnInit(): void {
  }

  
  openLink(event?: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    if(event) event.preventDefault();
  }

  delete() {
    // this.openLink();
    this.deleted.emit(this.data);
    this.bottomSheetRef.dismiss();
  }
}
