import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveAutocompleteSyncAsyncComponent } from './twentyfive-autocomplete-sync-async.component';

describe('TwentyfiveAutocompleteSyncAsyncComponent', () => {
  let component: TwentyfiveAutocompleteSyncAsyncComponent;
  let fixture: ComponentFixture<TwentyfiveAutocompleteSyncAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyfiveAutocompleteSyncAsyncComponent]
    });
    fixture = TestBed.createComponent(TwentyfiveAutocompleteSyncAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
