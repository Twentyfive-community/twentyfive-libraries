import { NgModule } from '@angular/core';
import { TwentyfiveInputComponent } from './twentyfive-input.component';
import {NgClass, NgIf} from "@angular/common";
import {TwentyfiveInputGroupComponent} from "../input-group/twentyfive-input-group.component";
import {TwentyfiveInputWithIconComponent} from "../input-with-icon/twentyfive-input-with-icon.component";



@NgModule({
  declarations: [
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ],
    imports: [
        NgClass,
        NgIf
    ],
  exports: [
    TwentyfiveInputComponent,
    TwentyfiveInputGroupComponent,
    TwentyfiveInputWithIconComponent
  ]
})
export class TwentyfiveInputModule { }
