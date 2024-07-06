import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {TitleComponent} from './title/title.component';
import {NavComponent} from './nav/nav.component';
import {AnimatedMenuIconComponent} from './animated-menu-icon/animated-menu-icon.component';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TwentyfiveMenuItemModule} from "twentyfive-menu-item";


@NgModule({
  declarations: [
    TitleComponent,
    NavComponent,
    AnimatedMenuIconComponent
  ],
  imports: [
    TwentyfiveMenuItemModule,
    NgIf,
    NgForOf,
    NgClass,
    RouterLink,
    NgStyle
  ],
  exports: [
    NavComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TwentyfiveNavbarModule {
}
