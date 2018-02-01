import { TestBed, inject } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationService]
    });
  });

  it('should be created', inject([CalculationService], (service: CalculationService) => {
    expect(service).toBeTruthy();
  }));
});
