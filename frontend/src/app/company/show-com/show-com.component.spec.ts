import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComComponent } from './show-com.component';

describe('ShowComComponent', () => {
  let component: ShowComComponent;
  let fixture: ComponentFixture<ShowComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowComComponent]
    });
    fixture = TestBed.createComponent(ShowComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
