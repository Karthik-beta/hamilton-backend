import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocComponent } from './show-loc.component';

describe('ShowLocComponent', () => {
  let component: ShowLocComponent;
  let fixture: ComponentFixture<ShowLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowLocComponent]
    });
    fixture = TestBed.createComponent(ShowLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
