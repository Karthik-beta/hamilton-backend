import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndonhelpComponent } from './andonhelp.component';

describe('AndonhelpComponent', () => {
  let component: AndonhelpComponent;
  let fixture: ComponentFixture<AndonhelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndonhelpComponent]
    });
    fixture = TestBed.createComponent(AndonhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
