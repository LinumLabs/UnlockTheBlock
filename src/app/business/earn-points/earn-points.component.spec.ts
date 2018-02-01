import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnPointsComponent } from './earn-points.component';

describe('EarnPointsComponent', () => {
  let component: EarnPointsComponent;
  let fixture: ComponentFixture<EarnPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
