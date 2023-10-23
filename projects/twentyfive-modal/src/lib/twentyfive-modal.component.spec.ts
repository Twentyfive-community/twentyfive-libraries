import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveModalComponent } from './twentyfive-modal.component';

describe('TwentyfiveModalComponent', () => {
  let component: TwentyfiveModalComponent;
  let fixture: ComponentFixture<TwentyfiveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveModalComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
