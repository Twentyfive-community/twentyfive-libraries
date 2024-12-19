import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {GenericMobileTableComponent} from './generic-mobile-table.component';
import {GenericMobileTableRowComponent} from "./generic-mobile-table-row.component";
import {NgClass, NgForOf, NgIf, NgTemplateOutlet, SlicePipe} from "@angular/common";
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
    NgbModule,
    TwentyfiveSwitchModule,
    TwentyfiveStyleModule,
    NgClass,
    NgForOf,
    NgIf,
    NgIf,
    NgTemplateOutlet,
  ],
  exports: [
    GenericMobileTableComponent,
    GenericMobileTableRowComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenericMobileTableModule {
}
