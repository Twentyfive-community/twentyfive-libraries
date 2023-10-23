import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveMenuItemComponent } from './twentyfive-menu-item.component';

describe('TwentyfiveMenuItemComponent', () => {
  let component: TwentyfiveMenuItemComponent;
  let fixture: ComponentFixture<TwentyfiveMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveMenuItemComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
