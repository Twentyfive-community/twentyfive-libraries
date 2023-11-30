import {NgModule} from '@angular/core';
import {TwentyfiveModalComponent} from './twentyfive-modal.component';
import {CommonModule, NgClass, NgIf} from "@angular/common";
import {GenericButtonModule} from "generic-buttons";


@NgModule({
  declarations: [
    TwentyfiveModalComponent,
  ],
  imports: [
    NgClass,
    GenericButtonModule,
    NgIf,
    GenericButtonModule,
    CommonModule
  ],
  exports: [
    TwentyfiveModalComponent
  ]
})
export class TwentyfiveModalModule { }
