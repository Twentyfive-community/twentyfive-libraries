import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveInputComponent } from './twentyfive-input.component';

describe('TwentyfiveInputComponent', () => {
  let component: TwentyfiveInputComponent;
  let fixture: ComponentFixture<TwentyfiveInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveInputComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
