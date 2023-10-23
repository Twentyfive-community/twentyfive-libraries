import { TestBed } from '@angular/core/testing';

import { TwentyfiveTextareaService } from './twentyfive-textarea.service';

describe('TwentyfiveTextareaService', () => {
  let service: TwentyfiveTextareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveTextareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
