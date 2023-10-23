import { TestBed } from '@angular/core/testing';

import { TwentyfiveSidebarService } from './twentyfive-sidebar.service';

describe('TwentyfiveSidebarService', () => {
  let service: TwentyfiveSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
