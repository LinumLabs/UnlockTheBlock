import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterPageComponent } from './meter-page.component';

describe('MeterPageComponent', () => {
  let component: MeterPageComponent;
  let fixture: ComponentFixture<MeterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
