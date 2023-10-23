import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveDatepickerComponent } from './twentyfive-datepicker.component';

describe('TwentyfiveDatepickerComponent', () => {
  let component: TwentyfiveDatepickerComponent;
  let fixture: ComponentFixture<TwentyfiveDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveDatepickerComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
