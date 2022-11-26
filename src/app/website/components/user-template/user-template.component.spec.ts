import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateComponent } from './user-template.component';

describe('UserTemplateComponent', () => {
  let component: UserTemplateComponent;
  let fixture: ComponentFixture<UserTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
