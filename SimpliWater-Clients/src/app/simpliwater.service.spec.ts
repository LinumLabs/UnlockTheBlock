import { TestBed, inject } from '@angular/core/testing';

import { SimpliwaterService } from './simpliwater.service';

describe('SimpliwaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpliwaterService]
    });
  });

  it('should be created', inject([SimpliwaterService], (service: SimpliwaterService) => {
    expect(service).toBeTruthy();
  }));
});
