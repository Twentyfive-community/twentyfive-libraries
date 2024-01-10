import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMenuIconComponent } from './animated-menu-icon.component';

describe('AnimatedMenuIconComponent', () => {
  let component: AnimatedMenuIconComponent;
  let fixture: ComponentFixture<AnimatedMenuIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedMenuIconComponent]
    });
    fixture = TestBed.createComponent(AnimatedMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
