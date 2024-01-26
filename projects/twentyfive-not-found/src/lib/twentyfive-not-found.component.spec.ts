import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveNotFoundComponent } from './twentyfive-not-found.component';

describe('TwentyfiveNotFoundComponent', () => {
  let component: TwentyfiveNotFoundComponent;
  let fixture: ComponentFixture<TwentyfiveNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveNotFoundComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
