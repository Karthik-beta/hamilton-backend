import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbreakdownComponent } from './subbreakdown.component';

describe('SubbreakdownComponent', () => {
  let component: SubbreakdownComponent;
  let fixture: ComponentFixture<SubbreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubbreakdownComponent]
    });
    fixture = TestBed.createComponent(SubbreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
