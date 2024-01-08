import { NgModule } from '@angular/core';
import { TwentyfiveAutocompleteComponent } from './twentyfive-autocomplete/twentyfive-autocomplete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    TwentyfiveAutocompleteComponent
  ]
})
export class TwentyfiveAutocompleteSyncAsyncModule { }
