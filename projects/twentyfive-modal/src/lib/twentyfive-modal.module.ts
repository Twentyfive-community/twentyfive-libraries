import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {TwentyfiveModalComponent} from './twentyfive-modal.component';
import {CommonModule, NgClass, NgIf} from "@angular/common";
import {GenericButtonModule} from "generic-buttons";
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    TwentyfiveModalComponent
  ],
  imports: [
    RouterOutlet,
    NgClass,
    GenericButtonModule,
    NgIf,
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    TwentyfiveModalComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TwentyfiveModalModule {
}
