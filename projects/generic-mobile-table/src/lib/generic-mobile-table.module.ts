import {NgModule} from '@angular/core';
import {GenericMobileTableComponent} from './generic-mobile-table.component';
import {GenericMobileTableRowComponent} from "./generic-mobile-table-row.component";
import {SlicePipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {TwentyfiveStyleModule} from "twentyfive-style";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    GenericMobileTableComponent,
    GenericMobileTableRowComponent
  ],
  imports: [
    RouterOutlet,
    SlicePipe,
    BrowserAnimationsModule,
    NgbModule,
    BrowserModule,
    TwentyfiveSwitchModule,
    TwentyfiveStyleModule
  ],
  exports: [
    GenericMobileTableComponent,
    GenericMobileTableRowComponent
  ]
})
export class GenericMobileTableModule {
}
