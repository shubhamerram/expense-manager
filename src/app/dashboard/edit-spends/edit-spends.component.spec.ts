import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpendsComponent } from './edit-spends.component';

describe('EditSpendsComponent', () => {
  let component: EditSpendsComponent;
  let fixture: ComponentFixture<EditSpendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
