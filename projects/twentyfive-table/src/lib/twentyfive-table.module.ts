import {NgModule} from '@angular/core';
import {TwentyfiveTableComponent} from './twentyfive-table.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TwentyfiveTableRowComponent} from "./twentyfive-table-row.component";
import {TwentyfivePaginationComponent} from "./twentyfive-pagination.component";
import {TwentyfiveDropdownModule} from 'twentyfive-dropdown';
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ],
  imports: [
    RouterOutlet,
    NgbModule,
    TwentyfiveDropdownModule,
    TwentyfiveSwitchModule,
    NgClass,
    NgIf,
    NgForOf,
    NgStyle
  ],
  exports: [
    TwentyfiveTableComponent,
    TwentyfiveTableRowComponent,
    TwentyfivePaginationComponent
  ]
})
export class TwentyfiveTableModule {
}
