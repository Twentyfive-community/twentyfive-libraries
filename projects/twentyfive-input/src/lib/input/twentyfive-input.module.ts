import { NgModule } from '@angular/core';
import { TwentyfiveInputComponent } from './twentyfive-input.component';
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {TwentyfiveInputGroupComponent} from "../input-group/twentyfive-input-group.component";
import {TwentyfiveInputWithIconComponent} from "../input-with-icon/twentyfive-input-with-icon.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ],
    imports: [
        NgClass,
        NgIf,
        NgbModule,
        FormsModule,
        NgStyle
    ],
  exports: [
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ]
})
export class TwentyfiveInputModule { }
