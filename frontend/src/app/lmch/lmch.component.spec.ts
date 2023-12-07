import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmchComponent } from './lmch.component';

describe('LmchComponent', () => {
  let component: LmchComponent;
  let fixture: ComponentFixture<LmchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmchComponent]
    });
    fixture = TestBed.createComponent(LmchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
