import { TestBed } from '@angular/core/testing';

import { TwentyfiveSpinnerService } from './twentyfive-spinner.service';

describe('TwentyfiveSpinnerService', () => {
  let service: TwentyfiveSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
