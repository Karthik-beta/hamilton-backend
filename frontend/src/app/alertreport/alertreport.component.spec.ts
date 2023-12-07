import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertreportComponent } from './alertreport.component';

describe('AlertreportComponent', () => {
  let component: AlertreportComponent;
  let fixture: ComponentFixture<AlertreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertreportComponent]
    });
    fixture = TestBed.createComponent(AlertreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
