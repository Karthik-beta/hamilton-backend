import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMecComponent } from './add-edit-mec.component';

describe('AddEditMecComponent', () => {
  let component: AddEditMecComponent;
  let fixture: ComponentFixture<AddEditMecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditMecComponent]
    });
    fixture = TestBed.createComponent(AddEditMecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
