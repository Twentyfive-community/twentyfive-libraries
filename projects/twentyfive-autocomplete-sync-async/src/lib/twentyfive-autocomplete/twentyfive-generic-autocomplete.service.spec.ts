import { TestBed } from '@angular/core/testing';

import { TwentyfiveGenericAutocompleteService } from './twentyfive-generic-autocomplete.service';

describe('TwentyfiveGenericAutocompleteService', () => {
  let service: TwentyfiveGenericAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveGenericAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
