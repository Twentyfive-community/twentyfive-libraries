import { NgModule } from '@angular/core';
import { TwentyfiveSwitchComponent } from './twentyfive-switch.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveSwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    TwentyfiveSwitchComponent
  ]
})
export class TwentyfiveSwitchModule { }
