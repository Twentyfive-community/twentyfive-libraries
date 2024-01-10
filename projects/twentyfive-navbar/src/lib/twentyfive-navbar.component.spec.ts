import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveNavbarComponent } from './twentyfive-navbar.component';

describe('TwentyfiveNavbarComponent', () => {
  let component: TwentyfiveNavbarComponent;
  let fixture: ComponentFixture<TwentyfiveNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveNavbarComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
