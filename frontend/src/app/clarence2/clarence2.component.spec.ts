import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clarence2Component } from './clarence2.component';

describe('Clarence2Component', () => {
  let component: Clarence2Component;
  let fixture: ComponentFixture<Clarence2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clarence2Component]
    });
    fixture = TestBed.createComponent(Clarence2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
