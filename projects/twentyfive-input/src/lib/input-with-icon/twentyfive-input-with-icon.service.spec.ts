import { TestBed } from '@angular/core/testing';

import { TwentyfiveInputWithIconService } from './twentyfive-input-with-icon.service';

describe('TwentyfiveInputWithIconService', () => {
  let service: TwentyfiveInputWithIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveInputWithIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
