import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductioninfoComponent } from './productioninfo.component';

describe('ProductioninfoComponent', () => {
  let component: ProductioninfoComponent;
  let fixture: ComponentFixture<ProductioninfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductioninfoComponent]
    });
    fixture = TestBed.createComponent(ProductioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
