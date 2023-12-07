import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionmachineComponent } from './productionmachine.component';

describe('ProductionmachineComponent', () => {
  let component: ProductionmachineComponent;
  let fixture: ComponentFixture<ProductionmachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionmachineComponent]
    });
    fixture = TestBed.createComponent(ProductionmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
