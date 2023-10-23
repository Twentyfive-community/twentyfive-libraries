import { TestBed } from '@angular/core/testing';

import { TwentyfiveInputService } from './twentyfive-input.service';

describe('TwentyfiveInputService', () => {
  let service: TwentyfiveInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
