import { NgModule } from '@angular/core';
import { TwentyfiveChipComponent } from './twentyfive-chip.component';
import {NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveChipComponent
  ],
  imports: [
    NgIf
  ],
  exports: [
    TwentyfiveChipComponent
  ]
})
export class TwentyfiveChipModule { }
