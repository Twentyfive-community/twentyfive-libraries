import { TestBed } from '@angular/core/testing';

import { TwentyfiveCookieModalService } from './twentyfive-cookie-modal.service';

describe('TwentyfiveCookieModalService', () => {
  let service: TwentyfiveCookieModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveCookieModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
