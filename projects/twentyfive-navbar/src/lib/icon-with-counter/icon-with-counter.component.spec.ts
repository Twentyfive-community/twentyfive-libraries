import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithCounterComponent } from './icon-with-counter.component';

describe('IconWithCounterComponent', () => {
  let component: IconWithCounterComponent;
  let fixture: ComponentFixture<IconWithCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconWithCounterComponent]
    });
    fixture = TestBed.createComponent(IconWithCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
