import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnd3Component } from './show-and3.component';

describe('ShowAnd3Component', () => {
  let component: ShowAnd3Component;
  let fixture: ComponentFixture<ShowAnd3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAnd3Component]
    });
    fixture = TestBed.createComponent(ShowAnd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
