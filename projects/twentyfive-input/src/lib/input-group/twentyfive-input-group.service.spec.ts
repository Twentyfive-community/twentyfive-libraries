import { TestBed } from '@angular/core/testing';

import { TwentyfiveInputGroupService } from './twentyfive-input-group.service';

describe('TwentyfiveInputGroupService', () => {
  let service: TwentyfiveInputGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveInputGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
