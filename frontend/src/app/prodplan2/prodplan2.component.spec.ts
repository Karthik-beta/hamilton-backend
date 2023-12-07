import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodplan2Component } from './prodplan2.component';

describe('Prodplan2Component', () => {
  let component: Prodplan2Component;
  let fixture: ComponentFixture<Prodplan2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Prodplan2Component]
    });
    fixture = TestBed.createComponent(Prodplan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
