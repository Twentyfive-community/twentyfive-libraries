import { TestBed } from '@angular/core/testing';

import { TwentyfiveModalService } from './twentyfive-modal.service';

describe('TwentyfiveModalService', () => {
  let service: TwentyfiveModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
