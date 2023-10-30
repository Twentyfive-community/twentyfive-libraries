import { NgModule } from '@angular/core';
import { TwentyfiveAutocompleteSyncAsyncComponent } from './twentyfive-autocomplete-sync-async.component';
import { TwentyfiveAutocompleteComponent } from './twentyfive-autocomplete/twentyfive-autocomplete.component';



@NgModule({
  declarations: [
    TwentyfiveAutocompleteSyncAsyncComponent,
    TwentyfiveAutocompleteComponent
  ],
  imports: [
  ],
  exports: [
    TwentyfiveAutocompleteSyncAsyncComponent
  ]
})
export class TwentyfiveAutocompleteSyncAsyncModule { }
