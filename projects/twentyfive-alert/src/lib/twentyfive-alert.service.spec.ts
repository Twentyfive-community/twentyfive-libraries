import { TestBed } from '@angular/core/testing';

import { TwentyfiveAlertService } from './twentyfive-alert.service';

describe('TwentyfiveAlertService', () => {
  let service: TwentyfiveAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
