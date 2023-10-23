import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveRangeComponent } from './twentyfive-range.component';

describe('TwentyfiveRangeComponent', () => {
  let component: TwentyfiveRangeComponent;
  let fixture: ComponentFixture<TwentyfiveRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveRangeComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
