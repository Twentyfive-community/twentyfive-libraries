import { TestBed } from '@angular/core/testing';

import { TwentyfiveRangeService } from './twentyfive-range.service';

describe('TwentyfiveRangeService', () => {
  let service: TwentyfiveRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
