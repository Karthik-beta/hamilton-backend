import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyinoutComponent } from './monthlyinout.component';

describe('MonthlyinoutComponent', () => {
  let component: MonthlyinoutComponent;
  let fixture: ComponentFixture<MonthlyinoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyinoutComponent]
    });
    fixture = TestBed.createComponent(MonthlyinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
