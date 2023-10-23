import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveTextareaComponent } from './twentyfive-textarea.component';

describe('TwentyfiveTextareaComponent', () => {
  let component: TwentyfiveTextareaComponent;
  let fixture: ComponentFixture<TwentyfiveTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveTextareaComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
