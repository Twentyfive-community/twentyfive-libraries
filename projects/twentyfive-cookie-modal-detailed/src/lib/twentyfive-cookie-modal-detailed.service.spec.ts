import { TestBed } from '@angular/core/testing';

import { TwentyfiveCookieModalDetailedService } from './twentyfive-cookie-modal-detailed.service';

describe('TwentyfiveCookieModalDetailedService', () => {
  let service: TwentyfiveCookieModalDetailedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveCookieModalDetailedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
