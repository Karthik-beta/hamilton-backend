import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeanalysisComponent } from './oeeanalysis.component';

describe('OeeanalysisComponent', () => {
  let component: OeeanalysisComponent;
  let fixture: ComponentFixture<OeeanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OeeanalysisComponent]
    });
    fixture = TestBed.createComponent(OeeanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
