import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcehComponent } from './resourceh.component';

describe('ResourcehComponent', () => {
  let component: ResourcehComponent;
  let fixture: ComponentFixture<ResourcehComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcehComponent]
    });
    fixture = TestBed.createComponent(ResourcehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
