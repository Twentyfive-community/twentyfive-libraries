import { NgModule } from '@angular/core';
import { TwentyfiveDropdownComponent } from './twentyfive-dropdown.component';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    TwentyfiveDropdownComponent
  ],
  imports: [
    NgIf,
    NgClass,
    FormsModule,
    NgForOf,
    NgbModule
  ],
  exports: [
    TwentyfiveDropdownComponent
  ]
})
export class TwentyfiveDropdownModule { }
