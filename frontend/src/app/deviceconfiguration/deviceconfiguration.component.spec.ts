import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceconfigurationComponent } from './deviceconfiguration.component';

describe('DeviceconfigurationComponent', () => {
  let component: DeviceconfigurationComponent;
  let fixture: ComponentFixture<DeviceconfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceconfigurationComponent]
    });
    fixture = TestBed.createComponent(DeviceconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
