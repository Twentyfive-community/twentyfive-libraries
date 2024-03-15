import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveStompClientComponent } from './twentyfive-stomp-client.component';

describe('TwentyfiveStompClientComponent', () => {
  let component: TwentyfiveStompClientComponent;
  let fixture: ComponentFixture<TwentyfiveStompClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveStompClientComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveStompClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
