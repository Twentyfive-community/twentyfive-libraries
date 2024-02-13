import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveChipComponent } from './twentyfive-chip.component';

describe('TwentyfiveChipComponent', () => {
  let component: TwentyfiveChipComponent;
  let fixture: ComponentFixture<TwentyfiveChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveChipComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
