import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAttComponent } from './add-edit-att.component';

describe('AddEditAttComponent', () => {
  let component: AddEditAttComponent;
  let fixture: ComponentFixture<AddEditAttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAttComponent]
    });
    fixture = TestBed.createComponent(AddEditAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
