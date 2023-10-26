import { TestBed } from '@angular/core/testing';

import { TwentyfiveModalGenericComponentService } from './twentyfive-modal-generic-component.service';

describe('TwentyfiveModalGenericComponentService', () => {
  let service: TwentyfiveModalGenericComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveModalGenericComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
