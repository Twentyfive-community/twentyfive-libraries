import {NgModule} from '@angular/core';
import { TwentyfiveCookieModalComponent } from './twentyfive-cookie-modal.component';
import {GenericButtonModule} from "generic-buttons";


@NgModule({
  declarations: [
    TwentyfiveCookieModalComponent
  ],
  imports: [
    GenericButtonModule
  ],
  exports: [
    TwentyfiveCookieModalComponent
  ]
})
export class TwentyfiveCookieModalModule { }
