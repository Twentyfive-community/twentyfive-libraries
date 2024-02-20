import { NgModule } from '@angular/core';
import { TwentyfiveTextareaComponent } from './twentyfive-textarea.component';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TwentyfiveTextareaComponent
  ],
  imports: [
    NgClass,
    NgIf,
    FormsModule
  ],
  exports: [
    TwentyfiveTextareaComponent
  ]
})
export class TwentyfiveTextareaModule { }
