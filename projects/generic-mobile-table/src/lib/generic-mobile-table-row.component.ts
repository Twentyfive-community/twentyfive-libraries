import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHeader} from "./table-header";
import {MobileTableTheme, MobileTheadTheme} from "twentyfive-style";

@Component({
  selector: 'lib-generic-mobile-table-row',
  templateUrl: './generic-mobile-table-row.component.html',
  styleUrls: ['./generic-mobile-table-row.component.scss']
})
export class GenericMobileTableRowComponent{

  @Input() mobileTableStyle: any;
  @Input() mobileTheadStyle: any;
  @Input() row: any;
  @Input() switchLabelText: any;
  @Input() switchStyle: any;
  @Input() actions: any = [];
  @Input() headers: TableHeader [] = [];
  @Input() rows: any = [];

  @Input() customCssClass: string = '';
  @Input() customHeaderCssClass: string = '';
  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() customSwitchCssClass: string = '';

  @Input() showActions: boolean = false;
  @Input() showSwitch: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;

  @Output() changeSwitchValue = new EventEmitter<any>();

  fields: string[] = [];

  eventChange(event: any) {
    this.changeSwitchValue.emit(event);
  }

  protected readonly MobileTheadTheme = MobileTheadTheme;
  protected readonly MobileTableTheme = MobileTableTheme;
}



