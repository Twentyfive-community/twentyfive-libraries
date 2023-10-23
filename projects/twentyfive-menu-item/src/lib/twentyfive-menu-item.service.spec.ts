import { TestBed } from '@angular/core/testing';

import { TwentyfiveMenuItemService } from './twentyfive-menu-item.service';

describe('TwentyfiveMenuItemService', () => {
  let service: TwentyfiveMenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveMenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
