import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductionmachineComponent } from './add-edit-productionmachine.component';

describe('AddEditProductionmachineComponent', () => {
  let component: AddEditProductionmachineComponent;
  let fixture: ComponentFixture<AddEditProductionmachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProductionmachineComponent]
    });
    fixture = TestBed.createComponent(AddEditProductionmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
