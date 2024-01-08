import {NgModule} from '@angular/core';
import {TwentyfiveSidebarComponent} from './twentyfive-sidebar.component';
import {TwentyfiveMenuItemModule} from "twentyfive-menu-item";
import {NgForOf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveSidebarComponent
  ],
  imports: [
    TwentyfiveMenuItemModule,
    NgForOf
  ],
  exports: [
    TwentyfiveSidebarComponent
  ]
})
export class TwentyfiveSidebarModule {
}
