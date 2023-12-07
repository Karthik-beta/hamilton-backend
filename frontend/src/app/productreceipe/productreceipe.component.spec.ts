import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreceipeComponent } from './productreceipe.component';

describe('ProductreceipeComponent', () => {
  let component: ProductreceipeComponent;
  let fixture: ComponentFixture<ProductreceipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductreceipeComponent]
    });
    fixture = TestBed.createComponent(ProductreceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
