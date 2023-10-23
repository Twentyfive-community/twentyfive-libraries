import { NgModule } from '@angular/core';
import { TwentyfiveRangeComponent } from './twentyfive-range.component';
import {NgClass} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveRangeComponent
  ],
    imports: [
        NgClass
    ],
  exports: [
    TwentyfiveRangeComponent
  ]
})
export class TwentyfiveRangeModule { }
