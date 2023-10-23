import { NgModule } from '@angular/core';
import { TwentyfiveDropdownComponent } from './twentyfive-dropdown.component';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TwentyfiveDropdownComponent
  ],
  imports: [
    NgIf,
    NgClass,
    FormsModule,
    NgForOf
  ],
  exports: [
    TwentyfiveDropdownComponent
  ]
})
export class TwentyfiveDropdownModule { }
