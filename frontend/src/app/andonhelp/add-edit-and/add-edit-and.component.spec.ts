import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAndComponent } from './add-edit-and.component';

describe('AddEditAndComponent', () => {
  let component: AddEditAndComponent;
  let fixture: ComponentFixture<AddEditAndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAndComponent]
    });
    fixture = TestBed.createComponent(AddEditAndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
