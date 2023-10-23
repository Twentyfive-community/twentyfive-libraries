import { TestBed } from '@angular/core/testing';

import { TwentyfiveSelectService } from './twentyfive-select.service';

describe('TwentyfiveSelectService', () => {
  let service: TwentyfiveSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
