import {NgModule} from '@angular/core';
import {TwentyfiveSpinnerComponent} from './twentyfive-spinner.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    TwentyfiveSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    TwentyfiveSpinnerComponent
  ]
})
export class TwentyfiveSpinnerModule {
}
