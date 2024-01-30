import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveErrorPageComponent } from './twentyfive-error-page.component';

describe('TwentyfiveErrorPageComponent', () => {
  let component: TwentyfiveErrorPageComponent;
  let fixture: ComponentFixture<TwentyfiveErrorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveErrorPageComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
