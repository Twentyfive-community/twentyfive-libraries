import { TestBed } from '@angular/core/testing';

import { TwentyfiveSwitchService } from './twentyfive-switch.service';

describe('TwentyfiveSwitchService', () => {
  let service: TwentyfiveSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
