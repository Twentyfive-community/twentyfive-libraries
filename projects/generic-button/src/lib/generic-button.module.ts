import {NgModule} from '@angular/core';
import {GenericButtonComponent} from './generic-button.component';
import {RouterLink} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {GenericButtonOnlyIconComponent} from "./generic-button-only-icon.component";
import {GenericButtonTextWithIconComponent} from "./generic-button-text-with-icon.component";
import {GenericRadioButtonComponent} from "./generic-radio-button.component";
import {NgClass, NgIf, NgStyle} from "@angular/common";


@NgModule({
  declarations: [
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
  ],
    imports: [
        NgbModule,
        RouterLink,
        NgClass,
        NgIf,
        NgStyle
    ],
  exports: [
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
  ]
})
export class GenericButtonModule {
}
