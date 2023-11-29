import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-generic-mobile-table',
  templateUrl: './generic-mobile-table.component.html',
  styleUrls: ['./generic-mobile-table.component.scss']
})
export class GenericMobileTableComponent {

  @Input() actions: any = [];
  @Input() headers: any = [];
  @Input() rows: any = [];
  @Input() tableStyle:any;
  @Input() checkedField: string = '';
  @Input() switchText: string = '';
  @Input() switchLabelText: string = 'On/Off';
  @Input() showSwitch: boolean = false;
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;

  @Input() switchStyle: any;

  @Input() customSwitchCssClass: string = '';
  @Input() customCssClass: string = '';
  @Output() switchClick = new EventEmitter<any>();


  changeSwitchValue(event: any) {
    this.switchClick.emit(event);
  }



}


