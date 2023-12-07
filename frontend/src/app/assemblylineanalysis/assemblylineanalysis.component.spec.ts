import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblylineanalysisComponent } from './assemblylineanalysis.component';

describe('AssemblylineanalysisComponent', () => {
  let component: AssemblylineanalysisComponent;
  let fixture: ComponentFixture<AssemblylineanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblylineanalysisComponent]
    });
    fixture = TestBed.createComponent(AssemblylineanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
