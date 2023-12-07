import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonoComponent } from './pono.component';

describe('PonoComponent', () => {
  let component: PonoComponent;
  let fixture: ComponentFixture<PonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PonoComponent]
    });
    fixture = TestBed.createComponent(PonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
