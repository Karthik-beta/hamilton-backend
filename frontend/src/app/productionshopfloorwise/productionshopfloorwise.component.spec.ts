import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionshopfloorwiseComponent } from './productionshopfloorwise.component';

describe('ProductionshopfloorwiseComponent', () => {
  let component: ProductionshopfloorwiseComponent;
  let fixture: ComponentFixture<ProductionshopfloorwiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionshopfloorwiseComponent]
    });
    fixture = TestBed.createComponent(ProductionshopfloorwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
