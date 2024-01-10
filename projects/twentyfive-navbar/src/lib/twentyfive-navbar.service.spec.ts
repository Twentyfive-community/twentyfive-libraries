import { TestBed } from '@angular/core/testing';

import { TwentyfiveNavbarService } from './twentyfive-navbar.service';

describe('TwentyfiveNavbarService', () => {
  let service: TwentyfiveNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
