import { TestBed } from '@angular/core/testing';

import { GenericMobileTableService } from './generic-mobile-table.service';

describe('GenericMobileTableService', () => {
  let service: GenericMobileTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericMobileTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
