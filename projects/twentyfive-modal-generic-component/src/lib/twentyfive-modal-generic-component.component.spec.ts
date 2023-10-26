import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveModalGenericComponentComponent } from './twentyfive-modal-generic-component.component';

describe('TwentyfiveModalGenericComponentComponent', () => {
  let component: TwentyfiveModalGenericComponentComponent;
  let fixture: ComponentFixture<TwentyfiveModalGenericComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveModalGenericComponentComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveModalGenericComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
