import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveTimepickerComponent } from './twentyfive-timepicker.component';

describe('TwentyfiveTimepickerComponent', () => {
  let component: TwentyfiveTimepickerComponent;
  let fixture: ComponentFixture<TwentyfiveTimepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveTimepickerComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
