import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveTableRowUltimateComponent } from './twentyfive-table-row-ultimate.component';

describe('TwentyfiveTableRowUltimateComponent', () => {
  let component: TwentyfiveTableRowUltimateComponent;
  let fixture: ComponentFixture<TwentyfiveTableRowUltimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveTableRowUltimateComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveTableRowUltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
