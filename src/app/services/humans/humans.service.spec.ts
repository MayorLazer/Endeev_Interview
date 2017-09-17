import { TestBed, inject } from '@angular/core/testing';

import { HumansService } from './humans.service';

describe('HumansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HumansService]
    });
  });

  it('should be created', inject([HumansService], (service: HumansService) => {
    expect(service).toBeTruthy();
  }));
});
