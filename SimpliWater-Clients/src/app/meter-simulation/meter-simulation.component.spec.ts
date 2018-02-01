import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterSimulationComponent } from './meter-simulation.component';

describe('MeterSimulationComponent', () => {
  let component: MeterSimulationComponent;
  let fixture: ComponentFixture<MeterSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
