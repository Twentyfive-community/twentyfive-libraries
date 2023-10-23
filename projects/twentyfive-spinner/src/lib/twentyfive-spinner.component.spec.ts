import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveSpinnerComponent } from './twentyfive-spinner.component';

describe('TwentyfiveSpinnerComponent', () => {
  let component: TwentyfiveSpinnerComponent;
  let fixture: ComponentFixture<TwentyfiveSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveSpinnerComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
