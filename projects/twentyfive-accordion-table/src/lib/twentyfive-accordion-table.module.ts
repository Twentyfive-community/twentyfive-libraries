import { NgModule } from '@angular/core';
import { TwentyfiveAccordionTableComponent } from './twentyfive-accordion-table.component';
import {NgClass, NgStyle, NgTemplateOutlet} from "@angular/common";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ShowDataObjectComponent} from "./show-data-object/show-data-object.component";



@NgModule({
  declarations: [
    TwentyfiveAccordionTableComponent,
    ShowDataObjectComponent
  ],
  imports: [
    NgTemplateOutlet,
    NgClass,
    NgStyle,
    NgbPagination,
    FormsModule
  ],
  exports: [
    TwentyfiveAccordionTableComponent
  ]
})
export class TwentyfiveAccordionTableModule { }
