import { TestBed } from '@angular/core/testing';

import { TwentyfiveAutocompleteSyncAsyncService } from './twentyfive-autocomplete-sync-async.service';

describe('TwentyfiveAutocompleteSyncAsyncService', () => {
  let service: TwentyfiveAutocompleteSyncAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveAutocompleteSyncAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
