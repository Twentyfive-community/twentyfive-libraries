import {NgModule} from '@angular/core';
import {TwentyfiveDatepickerRangeComponent} from './twentyfive-datepicker-range.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveDatepickerRangeComponent,
  ],
  imports: [
    FormsModule,
    NgbModule,
    NgIf,
    NgClass
  ],
  exports: [
    TwentyfiveDatepickerRangeComponent
  ]
})
export class TwentyfiveDatepickerRangeModule {
}
