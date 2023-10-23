import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveDatepickerRangeComponent } from './twentyfive-datepicker-range.component';

describe('TwentyfiveDatepickerRangeComponent', () => {
  let component: TwentyfiveDatepickerRangeComponent;
  let fixture: ComponentFixture<TwentyfiveDatepickerRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveDatepickerRangeComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveDatepickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
