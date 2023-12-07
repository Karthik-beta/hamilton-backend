import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProdplan2Component } from './add-edit-prodplan2.component';

describe('AddEditProdplan2Component', () => {
  let component: AddEditProdplan2Component;
  let fixture: ComponentFixture<AddEditProdplan2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProdplan2Component]
    });
    fixture = TestBed.createComponent(AddEditProdplan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
