import { NgModule } from '@angular/core';
import { TwentyfiveSwitchComponent } from './twentyfive-switch.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveSwitchComponent
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
  ],
  exports: [
    TwentyfiveSwitchComponent
  ]
})
export class TwentyfiveSwitchModule { }
