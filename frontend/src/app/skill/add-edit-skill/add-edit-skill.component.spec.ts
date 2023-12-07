import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSkillComponent } from './add-edit-skill.component';

describe('AddEditSkillComponent', () => {
  let component: AddEditSkillComponent;
  let fixture: ComponentFixture<AddEditSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSkillComponent]
    });
    fixture = TestBed.createComponent(AddEditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
