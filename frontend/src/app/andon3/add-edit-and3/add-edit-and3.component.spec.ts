import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAnd3Component } from './add-edit-and3.component';

describe('AddEditAnd3Component', () => {
  let component: AddEditAnd3Component;
  let fixture: ComponentFixture<AddEditAnd3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAnd3Component]
    });
    fixture = TestBed.createComponent(AddEditAnd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
