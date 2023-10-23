import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveSwitchComponent } from './twentyfive-switch.component';

describe('TwentyfiveSwitchComponent', () => {
  let component: TwentyfiveSwitchComponent;
  let fixture: ComponentFixture<TwentyfiveSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveSwitchComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
