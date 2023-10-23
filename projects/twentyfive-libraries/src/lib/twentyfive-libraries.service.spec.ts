import { TestBed } from '@angular/core/testing';

import { TwentyfiveLibrariesService } from './twentyfive-libraries.service';

describe('TwentyfiveLibrariesService', () => {
  let service: TwentyfiveLibrariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveLibrariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
