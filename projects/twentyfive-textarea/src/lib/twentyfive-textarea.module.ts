import { NgModule } from '@angular/core';
import { TwentyfiveTextareaComponent } from './twentyfive-textarea.component';
import {NgClass, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveTextareaComponent
  ],
  imports: [
    NgClass,
    NgIf
  ],
  exports: [
    TwentyfiveTextareaComponent
  ]
})
export class TwentyfiveTextareaModule { }
