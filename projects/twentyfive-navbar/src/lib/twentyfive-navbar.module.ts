import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {TitleComponent} from './title/title.component';
import {NavComponent} from './nav/nav.component';
import {AnimatedMenuIconComponent} from './animated-menu-icon/animated-menu-icon.component';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TwentyfiveMenuItemModule} from "twentyfive-menu-item";
import { IconWithCounterComponent } from './icon-with-counter/icon-with-counter.component';


@NgModule({
  declarations: [
    TitleComponent,
    NavComponent,
    AnimatedMenuIconComponent,
    IconWithCounterComponent
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
