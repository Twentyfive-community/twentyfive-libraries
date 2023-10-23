import { NgModule } from '@angular/core';
import { GenericButtonComponent } from './generic-button.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {GenericButtonOnlyIconComponent} from "./generic-button-only-icon.component";
import {GenericButtonTextWithIconComponent} from "./generic-button-text-with-icon.component";
import {GenericRadioButtonComponent} from "./generic-radio-button.component";



@NgModule({
  declarations: [
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
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
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
  ]
})
export class GenericButtonModule { }
