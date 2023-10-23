import {Component, Input, OnInit} from '@angular/core';
import {SwitchTheme} from "twentyfive-switch";

@Component({
  selector: 'tr[table-row]',
  templateUrl: './twentyfive-table-row.component.html',
  styleUrls: ['./twentyfive-table-row.component.scss']
})
export class TwentyfiveTableRowComponent implements OnInit{
  @Input() row: any;
  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() actions: any = [];
  @Input() showActions: boolean = false;
  @Input() switchStyle:  SwitchTheme = SwitchTheme.Primary;

  @Input() showSwitch: boolean = false;

  fields : string[] = [];

  ngOnInit() {
    this.fields = Object.getOwnPropertyNames(this.row);
  }
}

