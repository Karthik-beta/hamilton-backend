import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBdcComponent } from './add-edit-bdc.component';

describe('AddEditBdcComponent', () => {
  let component: AddEditBdcComponent;
  let fixture: ComponentFixture<AddEditBdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBdcComponent]
    });
    fixture = TestBed.createComponent(AddEditBdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
