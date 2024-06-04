import {NgModule} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NgbModule, NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  TwentyfiveGenericTimepickerComponent
} from './twentyfive-generic-timepicker/twentyfive-generic-timepicker.component';
import {TwentyfiveInputTimepickerComponent} from './twentyfive-input-timepicker/twentyfive-input-timepicker.component';


@NgModule({
  declarations: [
    TwentyfiveGenericTimepickerComponent,
    TwentyfiveInputTimepickerComponent
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgClass,
    NgIf,
    NgbTimepicker,
    NgForOf
  ],
  exports: [
    TwentyfiveGenericTimepickerComponent,
    TwentyfiveInputTimepickerComponent
  ]
})
export class TwentyfiveTimepickerModule {
}
