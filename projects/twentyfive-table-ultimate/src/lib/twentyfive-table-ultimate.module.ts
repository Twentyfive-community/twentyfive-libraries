import { NgModule } from '@angular/core';
import {TwentyfiveTableUltimateComponent} from "./twentyfive-table-ultimate/twentyfive-table-ultimate.component";
import { TwentyfiveTableRowUltimateComponent } from './twentyfive-table-row-ultimate/twentyfive-table-row-ultimate.component';
import {NgClass, NgForOf, NgIf, NgStyle, NgTemplateOutlet, SlicePipe} from "@angular/common";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {NgbPagination, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {TwentyfiveDropdownModule} from "twentyfive-dropdown";

@NgModule({
  declarations: [
    TwentyfiveTableUltimateComponent,
    TwentyfiveTableRowUltimateComponent
  ],
  imports: [
    NgIf,
    NgForOf,
    NgStyle,
    SlicePipe,
    NgTemplateOutlet,
    NgbTooltip,
    NgClass,
    NgbPagination,
    TwentyfiveSwitchModule,
    TwentyfiveDropdownModule
  ],
  exports: [
    TwentyfiveTableUltimateComponent,
  ]
})
export class TwentyfiveTableUltimateModule { }
