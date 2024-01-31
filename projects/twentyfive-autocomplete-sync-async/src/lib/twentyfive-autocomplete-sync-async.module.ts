import { NgModule } from '@angular/core';
import { TwentyfiveAutocompleteComponent } from './twentyfive-autocomplete/twentyfive-autocomplete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgForOf, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveAutocompleteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgClass,
    NgIf,
    NgForOf
  ],
  exports: [
    TwentyfiveAutocompleteComponent
  ]
})
export class TwentyfiveAutocompleteSyncAsyncModule { }
