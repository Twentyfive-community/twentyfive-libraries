import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveSidebarComponent } from './twentyfive-sidebar.component';

describe('TwentyfiveSidebarComponent', () => {
  let component: TwentyfiveSidebarComponent;
  let fixture: ComponentFixture<TwentyfiveSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveSidebarComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
