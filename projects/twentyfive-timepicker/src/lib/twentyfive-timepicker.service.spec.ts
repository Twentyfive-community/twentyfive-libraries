import { TestBed } from '@angular/core/testing';

import { TwentyfiveTimepickerService } from './twentyfive-timepicker.service';

describe('TwentyfiveTimepickerService', () => {
  let service: TwentyfiveTimepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveTimepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
