import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysislineComponent } from './analysisline.component';

describe('AnalysislineComponent', () => {
  let component: AnalysislineComponent;
  let fixture: ComponentFixture<AnalysislineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysislineComponent]
    });
    fixture = TestBed.createComponent(AnalysislineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
