import {NgModule} from '@angular/core';
import {TwentyfiveChipComponent} from './twentyfive-chip.component';
import {NgClass, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveChipComponent
  ],
  imports: [
    NgIf,
    NgClass
  ],
  exports: [
    TwentyfiveChipComponent
  ]
})
export class TwentyfiveChipModule {
}
