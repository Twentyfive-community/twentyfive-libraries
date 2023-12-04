import { NgModule } from '@angular/core';
import { TwentyfiveDatepickerComponent } from './twentyfive-datepicker.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveDatepickerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    RouterOutlet,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    TwentyfiveDatepickerComponent
  ]
})
export class TwentyfiveDatepickerModule { }
