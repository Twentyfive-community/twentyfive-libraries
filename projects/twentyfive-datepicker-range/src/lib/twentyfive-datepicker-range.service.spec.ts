import { TestBed } from '@angular/core/testing';

import { TwentyfiveDatepickerRangeService } from './twentyfive-datepicker-range.service';

describe('TwentyfiveDatepickerRangeService', () => {
  let service: TwentyfiveDatepickerRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveDatepickerRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
