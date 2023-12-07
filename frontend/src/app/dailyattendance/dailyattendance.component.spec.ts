import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyattendanceComponent } from './dailyattendance.component';

describe('DailyattendanceComponent', () => {
  let component: DailyattendanceComponent;
  let fixture: ComponentFixture<DailyattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyattendanceComponent]
    });
    fixture = TestBed.createComponent(DailyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
