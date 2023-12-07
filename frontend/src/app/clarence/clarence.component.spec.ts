import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarenceComponent } from './clarence.component';

describe('ClarenceComponent', () => {
  let component: ClarenceComponent;
  let fixture: ComponentFixture<ClarenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClarenceComponent]
    });
    fixture = TestBed.createComponent(ClarenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
