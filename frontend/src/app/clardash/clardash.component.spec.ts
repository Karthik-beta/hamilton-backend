import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClardashComponent } from './clardash.component';

describe('ClardashComponent', () => {
  let component: ClardashComponent;
  let fixture: ComponentFixture<ClardashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClardashComponent]
    });
    fixture = TestBed.createComponent(ClardashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
