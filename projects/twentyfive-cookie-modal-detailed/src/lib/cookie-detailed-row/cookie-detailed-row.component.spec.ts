import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDetailedRowComponent } from './cookie-detailed-row.component';

describe('CookieDetailedRowComponent', () => {
  let component: CookieDetailedRowComponent;
  let fixture: ComponentFixture<CookieDetailedRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieDetailedRowComponent]
    });
    fixture = TestBed.createComponent(CookieDetailedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
