import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineIdComponent } from './machine-id.component';

describe('MachineIdComponent', () => {
  let component: MachineIdComponent;
  let fixture: ComponentFixture<MachineIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineIdComponent]
    });
    fixture = TestBed.createComponent(MachineIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
