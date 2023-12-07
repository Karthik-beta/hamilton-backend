import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAndComponent } from './show-and.component';

describe('ShowAndComponent', () => {
  let component: ShowAndComponent;
  let fixture: ComponentFixture<ShowAndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAndComponent]
    });
    fixture = TestBed.createComponent(ShowAndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
