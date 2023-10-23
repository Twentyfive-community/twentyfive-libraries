import { NgModule } from '@angular/core';
import { TwentyfiveCheckboxComponent } from './twentyfive-checkbox.component';
import {NgClass} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveCheckboxComponent
  ],
    imports: [
        NgClass
    ],
  exports: [
    TwentyfiveCheckboxComponent
  ]
})
export class TwentyfiveCheckboxModule { }
