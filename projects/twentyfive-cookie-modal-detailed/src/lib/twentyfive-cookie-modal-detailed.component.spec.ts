import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveCookieModalDetailedComponent } from './twentyfive-cookie-modal-detailed.component';

describe('TwentyfiveCookieModalDetailedComponent', () => {
  let component: TwentyfiveCookieModalDetailedComponent;
  let fixture: ComponentFixture<TwentyfiveCookieModalDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveCookieModalDetailedComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveCookieModalDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
