import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveLibrariesComponent } from './twentyfive-libraries.component';

describe('TwentyfiveLibrariesComponent', () => {
  let component: TwentyfiveLibrariesComponent;
  let fixture: ComponentFixture<TwentyfiveLibrariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveLibrariesComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
