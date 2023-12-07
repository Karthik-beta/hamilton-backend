import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andon3Component } from './andon3.component';

describe('Andon3Component', () => {
  let component: Andon3Component;
  let fixture: ComponentFixture<Andon3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Andon3Component]
    });
    fixture = TestBed.createComponent(Andon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
