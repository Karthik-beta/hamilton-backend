import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertdailyComponent } from './alertdaily.component';

describe('AlertdailyComponent', () => {
  let component: AlertdailyComponent;
  let fixture: ComponentFixture<AlertdailyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertdailyComponent]
    });
    fixture = TestBed.createComponent(AlertdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
