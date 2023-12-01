import { NgModule } from '@angular/core';
import { TwentyfiveAlertComponent } from './twentyfive-alert.component';
import {NgClass} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterOutlet} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    TwentyfiveAlertComponent,

  ],
    imports: [
      NgClass,
      BrowserModule,
      NgbModule,
      RouterOutlet,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
  exports: [
    TwentyfiveAlertComponent
  ]
})
export class TwentyfiveAlertModule { }
