import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveInputTimepickerComponent } from './twentyfive-input-timepicker.component';

describe('TwentyfiveInputTimepickerComponent', () => {
  let component: TwentyfiveInputTimepickerComponent;
  let fixture: ComponentFixture<TwentyfiveInputTimepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveInputTimepickerComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveInputTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
