import {NgModule} from '@angular/core';
import { TwentyfiveCookieModalComponent } from './twentyfive-cookie-modal.component';
import {GenericButtonModule} from "generic-buttons";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveCookieModalComponent
  ],
  imports: [
    GenericButtonModule,
    NgIf
  ],
  exports: [
    TwentyfiveCookieModalComponent
  ]
})
export class TwentyfiveCookieModalModule { }
