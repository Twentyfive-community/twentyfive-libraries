import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveCookieModalComponent } from './twentyfive-cookie-modal.component';

describe('TwentyfiveCookieModalComponent', () => {
  let component: TwentyfiveCookieModalComponent;
  let fixture: ComponentFixture<TwentyfiveCookieModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveCookieModalComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveCookieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
