import { NgModule } from '@angular/core';
import { TwentyfiveTableUltimateComponent } from './twentyfive-table-ultimate.component';
import { TwentyfiveTableRowUltimateComponent } from './twentyfive-table-row-ultimate/twentyfive-table-row-ultimate.component';
import {NgClass, NgForOf, NgIf, NgStyle, NgTemplateOutlet, SlicePipe} from "@angular/common";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";



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
    TwentyfiveSwitchModule,
    NgbTooltip,
    NgClass
  ],
  exports: [
    TwentyfiveTableUltimateComponent,
  ]
})
export class TwentyfiveTableUltimateModule { }
