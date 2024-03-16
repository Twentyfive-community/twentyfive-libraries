import {NgModule} from '@angular/core';
import {TwentyfiveMenuItemComponent} from './twentyfive-menu-item.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveMenuItemComponent
  ],
  imports: [
    RouterLinkActive,
    RouterLink,
    NgIf,
    NgClass
  ],
  exports: [
    TwentyfiveMenuItemComponent
  ]
})
export class TwentyfiveMenuItemModule {
}
