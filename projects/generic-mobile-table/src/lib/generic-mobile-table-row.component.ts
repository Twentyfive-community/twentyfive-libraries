import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHeader} from "./table-header";

@Component({
  selector: 'lib-generic-mobile-table-row',
  templateUrl: './generic-mobile-table-row.component.html',
  styleUrls: ['./generic-mobile-table-row.component.scss']
})
export class GenericMobileTableRowComponent{

  @Input() mobileTableStyle: MobileTableTheme = MobileTableTheme.Primary;
  @Input() mobileTheadStyle: MobileTheadTheme = MobileTheadTheme.Primary;
  @Input() customCssClass: string = '';
  @Input() customHeaderCssClass: string = '';
  @Input() row: any;
  @Input() actions: any = [];
  @Input() headers: TableHeader [] = [];
  @Input() rows: any = [];
  @Input() showActions: boolean = false;
  @Input() showSwitch: boolean = false;

  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;

  @Input() switchStyle: any;

  @Input() customSwitchCssClass: string = '';

  @Output() changeSwitchValue = new EventEmitter<any>();

  eventChange(event: any) {
    this.changeSwitchValue.emit(event);
  }


  fields: string[] = [];
  protected readonly MobileTableTheme = MobileTableTheme;
  protected readonly MobileTheadTheme = MobileTheadTheme;
}


export enum MobileTableTheme {
  Primary = 'mobile-table-primary',
}

export enum MobileTheadTheme {
  Primary = 'mobile-thead-primary',
}
