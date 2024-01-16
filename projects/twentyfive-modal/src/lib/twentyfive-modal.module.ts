import {NgModule} from '@angular/core';
import {TwentyfiveModalComponent} from './twentyfive-modal.component';
import {NgClass, NgIf} from "@angular/common";
import {GenericButtonModule} from "generic-buttons";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    TwentyfiveModalComponent,
  ],
  imports: [
    RouterOutlet,
    NgClass,
    GenericButtonModule,
    NgIf
  ],
  exports: [
    TwentyfiveModalComponent
  ]
})
export class TwentyfiveModalModule {
}
