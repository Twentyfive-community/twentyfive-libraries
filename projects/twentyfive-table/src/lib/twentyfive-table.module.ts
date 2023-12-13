import {NgModule} from '@angular/core';
import {TwentyfiveTableComponent} from './twentyfive-table.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TwentyfiveTableRowComponent} from "./twentyfive-table-row.component";
import {TwentyfivePaginationComponent} from "./twentyfive-pagination.component";
import {TwentyfiveDropdownModule} from "twentyfive-dropdown";
import {TwentyfiveSwitchModule} from "twentyfive-switch";


@NgModule({
  declarations: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    TwentyfiveDropdownModule,
    TwentyfiveSwitchModule
  ],
  exports: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ]
})
export class TwentyfiveTableModule {
}
