import {NgModule} from '@angular/core';
import {TwentyfiveDatepickerComponent} from './twentyfive-datepicker.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveDatepickerComponent
  ],
  imports: [
    NgbModule,
    NgIf,
    NgClass,
    FormsModule
  ],
  exports: [
    TwentyfiveDatepickerComponent
  ]
})
export class TwentyfiveDatepickerModule {
}
