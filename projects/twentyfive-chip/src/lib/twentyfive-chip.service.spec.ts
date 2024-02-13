import { TestBed } from '@angular/core/testing';

import { TwentyfiveChipService } from './twentyfive-chip.service';

describe('TwentyfiveChipService', () => {
  let service: TwentyfiveChipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveChipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
