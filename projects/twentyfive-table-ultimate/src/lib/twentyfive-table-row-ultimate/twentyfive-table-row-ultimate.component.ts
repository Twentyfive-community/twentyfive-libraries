import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {SwitchTheme} from "twentyfive-style";
import {TableHeader} from "../models/table-headers";

@Component({
  selector: 'tr[ultimate-row]',
  templateUrl: './twentyfive-table-row-ultimate.component.html',
  styleUrls: ['./twentyfive-table-row-ultimate.component.css']
})
export class TwentyfiveTableRowUltimateComponent {

  @Input() row: any;
  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() actions: any = [];
  @Input() showActions: boolean = false;
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;
  @Input() headers: TableHeader[] = [];

  @Input() columnTemplateRefs: { [key: string]: TemplateRef<any> } = {};

  @Input() showSwitch: boolean = false;

  @Input() maxWidthValue: string = '15vw';

  @Output() changeSwitchValue = new EventEmitter<any>();

  eventChange(event: any) {
    this.changeSwitchValue.emit(event);
  }

  ngOnInit() {
  }

  parseValue(row: any, elem: any) {
    if (elem.value) {
      if (elem.value.includes('.')) {
        let split = elem.value.split('.');
        let temp = row;
        for (let i = 0; i < split.length; i++) {
          temp = temp[split[i]];
          if (temp === undefined|| temp === null) {
            return '-';
          }
        }
        return temp;
      }
      return row[elem.value];
    }else {
      return row[0];
    }
  }
}
