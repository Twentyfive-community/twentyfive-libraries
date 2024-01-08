import {NgModule} from '@angular/core';
import {TwentyfiveSpinnerComponent} from './twentyfive-spinner.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    TwentyfiveSpinnerComponent
  ],
  imports: [
    NgbModule,
    NgIf
  ],
  exports: [
    TwentyfiveSpinnerComponent
  ]
})
export class TwentyfiveSpinnerModule {
}
