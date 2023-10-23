import { TestBed } from '@angular/core/testing';

import { GenericButtonService } from './generic-button.service';

describe('GenericButtonService', () => {
  let service: GenericButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
