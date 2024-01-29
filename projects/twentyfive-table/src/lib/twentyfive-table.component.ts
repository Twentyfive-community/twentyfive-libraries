import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHeader} from "./table-header";
import {ButtonTheme, SwitchTheme, TableHeadTheme, TableTheme} from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-table',
   templateUrl: './twentyfive-table.component.html',
  styleUrls: ['./twentyfive-table.component.scss']
})
export class TwentyfiveTableComponent {

  @Input() tableHeadStyle: any;
  @Input() tableStyle:any;

  @Input() customCssClass: string = '';
  @Input() customHeaderClass: string = '';
  @Input() switchHeaderText: string = 'Off/On';
  @Input() actions: any = [];
  @Input() active: any;
  @Input() showActions: boolean = false;
  @Input() rows: any[] = [];
  @Input() headers: TableHeader[] = [];
  @Input() paginationStyle: any;
  @Input() checkedField: string = '';

  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() showSwitch: boolean = false;
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;

  @Input() maxSize: number = 5;
  @Input() pageSize: number = 5;
  @Input() page: number = 1;
  @Input() model:any;
  @Input() collectionSize: number = 0;
  @Input() rotate: boolean = true;
  @Output() modelChange:EventEmitter<number> = new EventEmitter<number>();
  @Output() pageChange:EventEmitter<number> = new EventEmitter<number>();
  @Input() dropdownElements:any[] = [];
  @Output() rowClicked = new EventEmitter<any>();
  @Output() switchClick = new EventEmitter<any>();

  onRowClick(selectedRow:any) {
    this.rowClicked.emit(selectedRow);
  }

  changeSwitchValue(event: any) {
    this.switchClick.emit(event);
  }

  protected readonly TableHeadTheme = TableHeadTheme;
  protected readonly TableTheme = TableTheme;
  protected readonly ButtonTheme = ButtonTheme;
}


