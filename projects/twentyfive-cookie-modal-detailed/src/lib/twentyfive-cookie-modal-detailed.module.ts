import { NgModule } from '@angular/core';
import { TwentyfiveCookieModalDetailedComponent } from './twentyfive-cookie-modal-detailed.component';
import { CookieDetailedRowComponent } from './cookie-detailed-row/cookie-detailed-row.component';
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {GenericButtonModule} from "generic-buttons";
import {NgForOf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveCookieModalDetailedComponent,
    CookieDetailedRowComponent
  ],
  imports: [
    TwentyfiveSwitchModule,
    GenericButtonModule,
    GenericButtonModule,
    GenericButtonModule,
    NgForOf
  ],
  exports: [
    TwentyfiveCookieModalDetailedComponent
  ]
})
export class TwentyfiveCookieModalDetailedModule { }
