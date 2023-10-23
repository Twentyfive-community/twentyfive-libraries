import { TestBed } from '@angular/core/testing';

import { TwentyfiveDropdownService } from './twentyfive-dropdown.service';

describe('TwentyfiveDropdownService', () => {
  let service: TwentyfiveDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
