import { TestBed } from '@angular/core/testing';

import { TwentyfiveTableService } from './twentyfive-table.service';

describe('TwentyfiveTableService', () => {
  let service: TwentyfiveTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
