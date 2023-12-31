import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableHeader} from "./table-header";
import { SwitchTheme } from 'twentyfive-style';

@Component({
  selector: 'tr[table-row]',
  templateUrl: './twentyfive-table-row.component.html',
  styleUrls: ['./twentyfive-table-row.component.scss']
})
export class TwentyfiveTableRowComponent implements OnInit{

  @Input() row: any ;
  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() actions: any = [];
  @Input() showActions: boolean = false;
  @Input() switchStyle:  SwitchTheme = SwitchTheme.Primary;
  @Input() headers: TableHeader[] = [];

  @Input() showSwitch: boolean = false;

  @Output() changeSwitchValue = new EventEmitter<any>();

  eventChange(event: any) {
    this.changeSwitchValue.emit(event);
  }

  ngOnInit() {
  }

}

