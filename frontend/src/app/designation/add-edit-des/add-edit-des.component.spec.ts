import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDesComponent } from './add-edit-des.component';

describe('AddEditDesComponent', () => {
  let component: AddEditDesComponent;
  let fixture: ComponentFixture<AddEditDesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDesComponent]
    });
    fixture = TestBed.createComponent(AddEditDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
