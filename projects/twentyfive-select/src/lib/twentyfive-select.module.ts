import {NgModule} from '@angular/core';
import {TwentyfiveSelectComponent} from './twentyfive-select.component';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TwentyfiveSelectComponent
  ],
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  exports: [
    TwentyfiveSelectComponent
  ]
})
export class TwentyfiveSelectModule {
}
