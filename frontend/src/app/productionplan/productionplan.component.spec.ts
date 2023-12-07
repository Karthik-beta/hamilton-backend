import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionplanComponent } from './productionplan.component';

describe('ProductionplanComponent', () => {
  let component: ProductionplanComponent;
  let fixture: ComponentFixture<ProductionplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionplanComponent]
    });
    fixture = TestBed.createComponent(ProductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
