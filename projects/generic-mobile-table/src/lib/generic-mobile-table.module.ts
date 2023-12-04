import {NgModule} from '@angular/core';
import {GenericMobileTableComponent} from './generic-mobile-table.component';
import {GenericMobileTableRowComponent} from "./generic-mobile-table-row.component";
import {SlicePipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {TwentyfiveStyleModule} from "twentyfive-style";



@NgModule({
  declarations: [
    GenericMobileTableComponent,
    GenericMobileTableRowComponent
  ],
  imports: [
    SlicePipe,
    BrowserModule,
    RouterModule.forRoot([]),
    RouterOutlet,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TwentyfiveSwitchModule,
    BrowserModule,
    TwentyfiveStyleModule,
    TwentyfiveSwitchModule,
    TwentyfiveSwitchModule,
    TwentyfiveSwitchModule,
    TwentyfiveSwitchModule

  ],
  exports: [
    GenericMobileTableComponent,
    GenericMobileTableRowComponent
  ]
})
export class GenericMobileTableModule { }
