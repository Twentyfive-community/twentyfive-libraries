import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveStyleComponent } from './twentyfive-style.component';

describe('TwentyfiveStyleComponent', () => {
  let component: TwentyfiveStyleComponent;
  let fixture: ComponentFixture<TwentyfiveStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveStyleComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
