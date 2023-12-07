import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndonproductionComponent } from './andonproduction.component';

describe('AndonproductionComponent', () => {
  let component: AndonproductionComponent;
  let fixture: ComponentFixture<AndonproductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndonproductionComponent]
    });
    fixture = TestBed.createComponent(AndonproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
