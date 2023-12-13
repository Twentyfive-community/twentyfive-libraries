import {NgModule} from '@angular/core';
import {TwentyfiveDatepickerComponent} from './twentyfive-datepicker.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    TwentyfiveDatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    TwentyfiveDatepickerComponent
  ]
})
export class TwentyfiveDatepickerModule {
}
