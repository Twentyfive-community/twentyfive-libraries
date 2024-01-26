import { NgModule } from '@angular/core';
import { TwentyfiveNotFoundComponent } from './twentyfive-not-found.component';
import {RouterLink} from "@angular/router";
import {GenericButtonModule} from "generic-buttons";



@NgModule({
  declarations: [
    TwentyfiveNotFoundComponent
  ],
  imports: [
    RouterLink,
    GenericButtonModule
  ],
  exports: [
    TwentyfiveNotFoundComponent
  ]
})
export class TwentyfiveNotFoundModule { }
