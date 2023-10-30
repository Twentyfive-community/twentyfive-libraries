import { NgModule } from '@angular/core';
import { TwentyfiveTimepickerComponent } from './twentyfive-timepicker.component';
import {NgClass, NgIf} from "@angular/common";
import {NgbModule, NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TwentyfiveGenericTimepickerComponent } from './twentyfive-generic-timepicker/twentyfive-generic-timepicker.component';
import { TwentyfiveInputTimepickerComponent } from './twentyfive-input-timepicker/twentyfive-input-timepicker.component';



@NgModule({
  declarations: [
    TwentyfiveGenericTimepickerComponent,
    TwentyfiveInputTimepickerComponent
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
    TwentyfiveGenericTimepickerComponent,
    TwentyfiveInputTimepickerComponent
  ]
})
export class TwentyfiveTimepickerModule { }
