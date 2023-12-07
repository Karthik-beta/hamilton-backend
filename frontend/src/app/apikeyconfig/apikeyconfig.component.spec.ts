import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikeyconfigComponent } from './apikeyconfig.component';

describe('ApikeyconfigComponent', () => {
  let component: ApikeyconfigComponent;
  let fixture: ComponentFixture<ApikeyconfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApikeyconfigComponent]
    });
    fixture = TestBed.createComponent(ApikeyconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
