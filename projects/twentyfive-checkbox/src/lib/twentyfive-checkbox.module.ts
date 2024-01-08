import {NgModule} from '@angular/core';
import {TwentyfiveCheckboxComponent} from './twentyfive-checkbox.component';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TwentyfiveCheckboxComponent
  ],
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf,
    FormsModule
  ],
  exports: [
    TwentyfiveCheckboxComponent
  ]
})
export class TwentyfiveCheckboxModule {
}
