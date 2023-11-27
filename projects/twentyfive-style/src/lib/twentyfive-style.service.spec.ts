import { TestBed } from '@angular/core/testing';

import { TwentyfiveStyleService } from './twentyfive-style.service';

describe('TwentyfiveStyleService', () => {
  let service: TwentyfiveStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
