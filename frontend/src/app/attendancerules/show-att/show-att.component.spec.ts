import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAttComponent } from './show-att.component';

describe('ShowAttComponent', () => {
  let component: ShowAttComponent;
  let fixture: ComponentFixture<ShowAttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAttComponent]
    });
    fixture = TestBed.createComponent(ShowAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
