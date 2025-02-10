import { TestBed } from '@angular/core/testing';

import { TwentyfiveTableUltimateService } from './twentyfive-table-ultimate.service';

describe('TwentyfiveTableUltimateService', () => {
  let service: TwentyfiveTableUltimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveTableUltimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
