import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveAccordionTableComponent } from './twentyfive-accordion-table.component';

describe('TwentyfiveAccordionTableComponent', () => {
  let component: TwentyfiveAccordionTableComponent;
  let fixture: ComponentFixture<TwentyfiveAccordionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveAccordionTableComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveAccordionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
