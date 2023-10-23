import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveTableComponent } from './twentyfive-table.component';

describe('TwentyfiveTableComponent', () => {
  let component: TwentyfiveTableComponent;
  let fixture: ComponentFixture<TwentyfiveTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveTableComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
