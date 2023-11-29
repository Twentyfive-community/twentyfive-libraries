import { NgModule } from '@angular/core';
import { TwentyfiveDatepickerRangeComponent } from './twentyfive-datepicker-range.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {TwentyfiveStyleModule} from "twentyfive-style";



@NgModule({
  declarations: [
    TwentyfiveDatepickerRangeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    RouterOutlet,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TwentyfiveStyleModule
  ],
  exports: [
    TwentyfiveDatepickerRangeComponent
  ]
})
export class TwentyfiveDatepickerRangeModule { }
