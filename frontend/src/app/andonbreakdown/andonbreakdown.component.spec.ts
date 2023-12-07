import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndonbreakdownComponent } from './andonbreakdown.component';

describe('AndonbreakdownComponent', () => {
  let component: AndonbreakdownComponent;
  let fixture: ComponentFixture<AndonbreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndonbreakdownComponent]
    });
    fixture = TestBed.createComponent(AndonbreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
