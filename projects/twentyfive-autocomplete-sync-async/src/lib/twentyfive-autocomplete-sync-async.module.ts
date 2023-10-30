import { NgModule } from '@angular/core';
import { TwentyfiveAutocompleteSyncAsyncComponent } from './twentyfive-autocomplete-sync-async.component';
import { TwentyfiveAutocompleteComponent } from './twentyfive-autocomplete/twentyfive-autocomplete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveAutocompleteSyncAsyncComponent,
    TwentyfiveAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    TwentyfiveAutocompleteSyncAsyncComponent
  ]
})
export class TwentyfiveAutocompleteSyncAsyncModule { }
