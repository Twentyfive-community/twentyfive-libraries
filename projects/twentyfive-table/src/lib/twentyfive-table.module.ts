import {NgModule} from '@angular/core';
import {TwentyfiveTableComponent} from './twentyfive-table.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TwentyfiveTableRowComponent} from "./twentyfive-table-row.component";
import {TwentyfivePaginationComponent} from "./twentyfive-pagination.component";
import {TwentyfiveDropdownModule} from "twentyfive-dropdown";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {NgClass, NgForOf, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ],
  imports: [
    NgbModule,
    TwentyfiveDropdownModule,
    TwentyfiveSwitchModule,
    NgClass,
    NgIf,
    NgForOf
  ],
  exports: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ]
})
export class TwentyfiveTableModule {
}
