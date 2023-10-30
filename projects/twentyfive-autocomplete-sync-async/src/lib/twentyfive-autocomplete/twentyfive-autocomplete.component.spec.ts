import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveAutocompleteComponent } from './twentyfive-autocomplete.component';

describe('TwentyfiveAutocompleteComponent', () => {
  let component: TwentyfiveAutocompleteComponent;
  let fixture: ComponentFixture<TwentyfiveAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveAutocompleteComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
