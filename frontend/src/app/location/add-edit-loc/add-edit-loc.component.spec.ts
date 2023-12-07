import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLocComponent } from './add-edit-loc.component';

describe('AddEditLocComponent', () => {
  let component: AddEditLocComponent;
  let fixture: ComponentFixture<AddEditLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditLocComponent]
    });
    fixture = TestBed.createComponent(AddEditLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
