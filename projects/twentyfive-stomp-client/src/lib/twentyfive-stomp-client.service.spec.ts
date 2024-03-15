import { TestBed } from '@angular/core/testing';

import { TwentyfiveStompClientService } from './twentyfive-stomp-client.service';

describe('TwentyfiveStompClientService', () => {
  let service: TwentyfiveStompClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwentyfiveStompClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
