import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SwitchTheme} from 'twentyfive-switch';

@Component({
  selector: 'lib-twentyfive-table',
   templateUrl: './twentyfive-table.component.html',
  styleUrls: ['./twentyfive-table.component.scss']
})
export class TwentyfiveTableComponent {

  @Input() tableHeadStyle: TableHeadTheme = TableHeadTheme.Primary;
  @Input() tableStyle:any;

  @Input() customCssClass: string = '';
  @Input() customHeaderClass: string = '';
  @Input() actions: any = [];
  @Input() showActions: boolean = false;
  @Input() rows: any[] = [];
  @Input() headers: string[] = [];
  @Input() paginationStyle: any;




  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() showSwitch: boolean = false;
  @Input() switchStyle:  SwitchTheme = SwitchTheme.Primary;



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
  onRowClick(selectedRow:any) {
    this.rowClicked.emit(selectedRow);
  }




  protected readonly TableHeadTheme = TableHeadTheme;
  protected readonly TableTheme = TableTheme;
}
export enum TableHeadTheme {
  Primary = 'thead-primary',
}
export enum TableTheme {
  Web = 'web-element',
  Mobile = 'mobile-element',
}

