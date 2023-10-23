import { TestBed } from '@angular/core/testing';

import { TwentyfiveCheckboxService } from './twentyfive-checkbox.service';

describe('TwentyfiveCheckboxService', () => {
  let service: TwentyfiveCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
