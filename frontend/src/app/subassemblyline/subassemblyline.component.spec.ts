import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubassemblylineComponent } from './subassemblyline.component';

describe('SubassemblylineComponent', () => {
  let component: SubassemblylineComponent;
  let fixture: ComponentFixture<SubassemblylineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubassemblylineComponent]
    });
    fixture = TestBed.createComponent(SubassemblylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
