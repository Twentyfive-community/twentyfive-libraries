import { TestBed } from '@angular/core/testing';

import { TwentyfiveNotFoundService } from './twentyfive-not-found.service';

describe('TwentyfiveNotFoundService', () => {
  let service: TwentyfiveNotFoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveNotFoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
