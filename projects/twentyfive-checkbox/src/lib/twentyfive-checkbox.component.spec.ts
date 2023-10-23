import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveCheckboxComponent } from './twentyfive-checkbox.component';

describe('TwentyfiveCheckboxComponent', () => {
  let component: TwentyfiveCheckboxComponent;
  let fixture: ComponentFixture<TwentyfiveCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveCheckboxComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
