import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveSelectComponent } from './twentyfive-select.component';

describe('TwentyfiveSelectComponent', () => {
  let component: TwentyfiveSelectComponent;
  let fixture: ComponentFixture<TwentyfiveSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveSelectComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
