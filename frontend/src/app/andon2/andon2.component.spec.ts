import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andon2Component } from './andon2.component';

describe('Andon2Component', () => {
  let component: Andon2Component;
  let fixture: ComponentFixture<Andon2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Andon2Component]
    });
    fixture = TestBed.createComponent(Andon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
