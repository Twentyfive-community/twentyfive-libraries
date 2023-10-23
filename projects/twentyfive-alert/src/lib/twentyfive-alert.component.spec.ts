import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveAlertComponent } from './twentyfive-alert.component';

describe('TwentyfiveAlertComponent', () => {
  let component: TwentyfiveAlertComponent;
  let fixture: ComponentFixture<TwentyfiveAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveAlertComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
