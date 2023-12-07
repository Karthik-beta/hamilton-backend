import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdowncategoryComponent } from './breakdowncategory.component';

describe('BreakdowncategoryComponent', () => {
  let component: BreakdowncategoryComponent;
  let fixture: ComponentFixture<BreakdowncategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakdowncategoryComponent]
    });
    fixture = TestBed.createComponent(BreakdowncategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
