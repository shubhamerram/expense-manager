import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  deleted = new EventEmitter();
  constructor(private bottomSheetRef: MatBottomSheetRef<MenuComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data:any) { 
  }

  openLink(event?: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    if(event) event.preventDefault();
  }

  delete() {
    this.deleted.emit(this.data);
    this.bottomSheetRef.dismiss();
  }


}
