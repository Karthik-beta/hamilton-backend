import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancerulesComponent } from './attendancerules.component';

describe('AttendancerulesComponent', () => {
  let component: AttendancerulesComponent;
  let fixture: ComponentFixture<AttendancerulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendancerulesComponent]
    });
    fixture = TestBed.createComponent(AttendancerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
