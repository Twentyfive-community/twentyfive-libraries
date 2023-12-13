import {NgModule} from '@angular/core';
import {TwentyfiveDatepickerRangeComponent} from './twentyfive-datepicker-range.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    TwentyfiveDatepickerRangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    TwentyfiveDatepickerRangeComponent
  ]
})
export class TwentyfiveDatepickerRangeModule {
}
