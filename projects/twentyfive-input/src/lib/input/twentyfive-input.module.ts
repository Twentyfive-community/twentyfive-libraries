import { NgModule } from '@angular/core';
import { TwentyfiveInputComponent } from './twentyfive-input.component';
import {NgClass, NgIf} from "@angular/common";
import {TwentyfiveInputGroupComponent} from "../input-group/twentyfive-input-group.component";
import {TwentyfiveInputWithIconComponent} from "../input-with-icon/twentyfive-input-with-icon.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ],
    imports: [
      NgClass,
      NgIf,
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
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ]
})
export class TwentyfiveInputModule { }
