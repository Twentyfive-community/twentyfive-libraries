import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { TwentyfiveAccordionTableComponent } from './twentyfive-accordion-table.component';
import {CommonModule, NgClass, NgIf, NgStyle, NgTemplateOutlet} from "@angular/common";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbPagination, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ShowDataObjectComponent} from "./show-data-object/show-data-object.component";
import {TwentyfiveDropdownModule} from "twentyfive-dropdown";
import {TwentyfiveSwitchModule} from "twentyfive-switch";
import {CollapseModule} from "ngx-bootstrap/collapse";
@NgModule({
  declarations: [
    TwentyfiveAccordionTableComponent,
    ShowDataObjectComponent
  ],
  imports: [
    CommonModule,
    NgTemplateOutlet,
    NgClass,
    NgStyle,
    NgbPagination,
    FormsModule,
    TwentyfiveDropdownModule,
    NgIf,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    TwentyfiveSwitchModule,
    NgbTooltip,
    CollapseModule
  ],
  exports: [
    TwentyfiveAccordionTableComponent,
    ShowDataObjectComponent,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TwentyfiveAccordionTableModule { }
