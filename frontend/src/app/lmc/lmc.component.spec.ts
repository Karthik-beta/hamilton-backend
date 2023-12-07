import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmcComponent } from './lmc.component';

describe('LmcComponent', () => {
  let component: LmcComponent;
  let fixture: ComponentFixture<LmcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmcComponent]
    });
    fixture = TestBed.createComponent(LmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
