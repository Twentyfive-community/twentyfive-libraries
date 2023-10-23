import { TestBed } from '@angular/core/testing';

import { TwentyfiveDatepickerService } from './twentyfive-datepicker.service';

describe('TwentyfiveDatepickerService', () => {
  let service: TwentyfiveDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
