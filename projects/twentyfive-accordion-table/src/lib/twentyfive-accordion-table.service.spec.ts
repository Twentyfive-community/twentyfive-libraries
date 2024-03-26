import { TestBed } from '@angular/core/testing';

import { TwentyfiveAccordionTableService } from './twentyfive-accordion-table.service';

describe('TwentyfiveAccordionTableService', () => {
  let service: TwentyfiveAccordionTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveAccordionTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
