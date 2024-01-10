import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { AnimatedMenuIconComponent } from './animated-menu-icon/animated-menu-icon.component';
import {TwentyfiveMenuItemModule} from "twentyfive-menu-item";
import {NgForOf, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TitleComponent,
    NavComponent,
    AnimatedMenuIconComponent
  ],
  imports: [
    TwentyfiveMenuItemModule,
    NgIf,
    NgForOf
  ],
  exports: [
    NavComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TwentyfiveNavbarModule { }
