import {NgModule} from '@angular/core';
import {TwentyfiveAlertComponent} from './twentyfive-alert.component';
import {NgClass} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    TwentyfiveAlertComponent,
  ],
  imports: [
    NgClass,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TwentyfiveAlertComponent
  ]
})
export class TwentyfiveAlertModule {
}
