import { NgModule } from '@angular/core';
import { TwentyfiveMenuItemComponent } from './twentyfive-menu-item.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveMenuItemComponent
  ],
    imports: [
        RouterLinkActive,
        RouterLink,
        NgIf
    ],
  exports: [
    TwentyfiveMenuItemComponent
  ]
})
export class TwentyfiveMenuItemModule { }
