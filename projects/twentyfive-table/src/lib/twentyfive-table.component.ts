import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHeader} from "./table-header";
import {ButtonTheme, SwitchTheme, TableHeadTheme, TableTheme} from 'twentyfive-style';

// Define the sort change event payload interface for clarity
export interface SortChangeEvent {
  sortColumn: any;
  sortDirection: 'asc' | 'desc';
}

@Component({
  selector: 'lib-twentyfive-table',
  templateUrl: './twentyfive-table.component.html',
  styleUrls: ['./twentyfive-table.component.scss']
})
export class TwentyfiveTableComponent {

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  @Input() tableHeadStyle: any;
  @Input() tableStyle: any;

  @Input() customCssClass: string = '';
  @Input() customHeaderClass: string = '';
  @Input() switchHeaderText: string = 'Off/On';
  @Input() actions: any = [];
  @Input() active: any;
  @Input() showActions: boolean = false;
  @Input() rows: any[] = [];
  @Input() sortable = false;
  @Input() headers: TableHeader[] = [];
  @Input() paginationStyle: any;
  @Input() checkedField: string = '';

  @Input() switchText: string = '';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() showSwitch: boolean = false;
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;
  @Input() isPaginated:boolean = true;

  @Input() maxSize: number = 5;
  @Input() pageSize: number = 5;
  @Input() page: number = 1;
  @Input() model: any;
  @Input() collectionSize: number = 0;
  @Input() rotate: boolean = true;
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() dropdownElements: any[] = [];

  @Input() maxWidthValue: string = '15vw';
  @Input() ellipsisBoolean: boolean = false;

  @Output() rowClicked = new EventEmitter<any>();
  @Output() switchClick = new EventEmitter<any>();
  @Output() sortableChange = new EventEmitter<SortChangeEvent>();


  sortingColumn(column: any): void {
    if (this.sortColumn === column) {
      // Toggle sort direction if the same column is clicked again
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set to ascending if a different column is clicked
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    // Emit the sort change event
    this.sortableChange.emit({
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection
    });
  }


  protected readonly TableHeadTheme = TableHeadTheme;
  protected readonly TableTheme = TableTheme;
  protected readonly ButtonTheme = ButtonTheme;
}


