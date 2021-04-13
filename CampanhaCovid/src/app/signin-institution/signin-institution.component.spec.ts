import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninInstitutionComponent } from './signin-institution.component';

describe('SigninInstitutionComponent', () => {
  let component: SigninInstitutionComponent;
  let fixture: ComponentFixture<SigninInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
