import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { TwentyfiveAccordionTableComponent } from './twentyfive-accordion-table.component';
import {CommonModule, NgClass, NgStyle, NgTemplateOutlet} from "@angular/common";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ShowDataObjectComponent} from "./show-data-object/show-data-object.component";
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
    CollapseModule
  ],
  exports: [
    TwentyfiveAccordionTableComponent,
    ShowDataObjectComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TwentyfiveAccordionTableModule { }
