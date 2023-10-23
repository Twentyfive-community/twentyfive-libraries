import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMobileTableComponent } from './generic-mobile-table.component';

describe('GenericMobileTableComponent', () => {
  let component: GenericMobileTableComponent;
  let fixture: ComponentFixture<GenericMobileTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericMobileTableComponent]
    });
    fixture = TestBed.createComponent(GenericMobileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
