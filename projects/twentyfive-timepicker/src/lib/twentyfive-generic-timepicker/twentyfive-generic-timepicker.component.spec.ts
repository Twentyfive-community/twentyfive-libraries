import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveGenericTimepickerComponent } from './twentyfive-generic-timepicker.component';

describe('TwentyfiveGenericTimepickerComponent', () => {
  let component: TwentyfiveGenericTimepickerComponent;
  let fixture: ComponentFixture<TwentyfiveGenericTimepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveGenericTimepickerComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveGenericTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
