import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QchComponent } from './qch.component';

describe('QchComponent', () => {
  let component: QchComponent;
  let fixture: ComponentFixture<QchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QchComponent]
    });
    fixture = TestBed.createComponent(QchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
