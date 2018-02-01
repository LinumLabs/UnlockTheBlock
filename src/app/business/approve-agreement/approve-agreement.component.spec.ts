import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAgreementComponent } from './approve-agreement.component';

describe('ApproveAgreementComponent', () => {
  let component: ApproveAgreementComponent;
  let fixture: ComponentFixture<ApproveAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
