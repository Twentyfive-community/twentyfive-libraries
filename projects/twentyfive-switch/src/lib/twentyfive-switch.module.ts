import { NgModule } from '@angular/core';
import { TwentyfiveSwitchComponent } from './twentyfive-switch.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    TwentyfiveSwitchComponent
  ],
  imports: [
    NgbModule,
    NgClass,
    FormsModule,
    NgIf
  ],
  exports: [
    TwentyfiveSwitchComponent
  ]
})
export class TwentyfiveSwitchModule { }
