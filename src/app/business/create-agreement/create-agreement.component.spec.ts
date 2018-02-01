import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgreementComponent } from './create-agreement.component';

describe('CreateAgreementComponent', () => {
  let component: CreateAgreementComponent;
  let fixture: ComponentFixture<CreateAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
