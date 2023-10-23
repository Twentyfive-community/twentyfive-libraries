import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveDropdownComponent } from './twentyfive-dropdown.component';

describe('TwentyfiveDropdownComponent', () => {
  let component: TwentyfiveDropdownComponent;
  let fixture: ComponentFixture<TwentyfiveDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveDropdownComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
