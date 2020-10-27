import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendDetailComponent } from './spend-detail.component';

describe('SpendDetailComponent', () => {
  let component: SpendDetailComponent;
  let fixture: ComponentFixture<SpendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
