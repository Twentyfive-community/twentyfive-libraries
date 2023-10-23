import { NgModule } from '@angular/core';
import { TwentyfiveModalComponent } from './twentyfive-modal.component';
import {CommonModule, NgClass, NgIf} from "@angular/common";
import {GenericButtonModule} from "generic-buttons";
import {GenericMobileTableModule} from "twentyfive-mobile-table-and-row";



@NgModule({
  declarations: [
    TwentyfiveModalComponent,
  ],
    imports: [
        NgClass,
        GenericButtonModule,
        NgIf,
        GenericButtonModule,
        GenericMobileTableModule,
      CommonModule
    ],
  exports: [
    TwentyfiveModalComponent
  ]
})
export class TwentyfiveModalModule { }
