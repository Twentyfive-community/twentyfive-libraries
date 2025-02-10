import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveTableUltimateComponent } from './twentyfive-table-ultimate.component';

describe('TwentyfiveTableUltimateComponent', () => {
  let component: TwentyfiveTableUltimateComponent;
  let fixture: ComponentFixture<TwentyfiveTableUltimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveTableUltimateComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveTableUltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
