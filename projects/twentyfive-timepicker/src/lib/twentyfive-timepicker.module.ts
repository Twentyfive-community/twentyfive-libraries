import { NgModule } from '@angular/core';
import { TwentyfiveTimepickerComponent } from './twentyfive-timepicker.component';
import {NgClass, NgIf} from "@angular/common";
import {NgbModule, NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TwentyfiveTimepickerComponent
  ],
    imports: [
      BrowserModule,
      NgbModule,
      RouterOutlet,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
        NgClass,
        NgIf,
        NgbTimepicker
    ],
  exports: [
    TwentyfiveTimepickerComponent
  ]
})
export class TwentyfiveTimepickerModule { }
