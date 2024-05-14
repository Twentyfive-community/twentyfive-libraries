import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Header} from "./classes/header";
import {ButtonTheme, SwitchTheme, TableHeadTheme} from "twentyfive-style";


export enum SortDirection {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
  NONE = ''
}


@Component({
  selector: 'twentyfive-accordion-table',
  templateUrl: './twentyfive-accordion-table.component.html',
  styleUrls: ['./twentyfive-accordion-table.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state(`${true}`, style({ height: '0px', opacity: '0'})),
      state(`${false}`, style({ height: '*', opacity: '1'})),
      transition(`${true}`+' <=> '+`${false}`, [animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')])
    ])]
})
export class TwentyfiveAccordionTableComponent implements AfterViewInit{

  /**
   * Data to display
   * */
  @Input() data: any[] = [];
  /**
   * The data details to display
   * */
  @Input() dataDetails: any[] = [];

  /**
   * Data attributes and column headers to display in the table
   * */
  @Input() headers: Header [] = [];

  /**
   * The details to be displayed: attribute
   * */
  @Input() extras: Header [] = [];

  // SWITCH OPTION
  /**
   * If true show a Switch at the start of each row
   * */
  @Input() showSwitch: boolean = false;
  /**
   * Header for the switch's column. Off/On by default
   * */
  @Input() switchHeaderText: string = 'Off/On';
  /**
   * Text shown next to the switch
   * */
  @Input() switchText: string = '';
  /**
   * If true the switch will not be clickable
   * */
  @Input() switchDisabled: boolean = false;
  /**
   * Initial state of the switch
   * */
  @Input() checked: boolean = false;
  /**
   *
   * */
  @Input() checkedField: string = '';
  /**
   *
   * */
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;
  // SWITCH END

  /**
   *  If true show the table action
   * */
  @Input() showActions: boolean = false;

  /**
   *
   * */
  @Input() actions: any = [];

  /**
   * The Template Reference for constructing the graphical display of table details.
   * */
  @Input() detailsTemplateRef: TemplateRef<any> = {} as TemplateRef<any> ;

  /**
   * The Template References used to construct custom column display.
   * Each template assigned to a specific column based on its header value.
   * */
  @Input() columnTemplateRefs: { [key: string]: TemplateRef<any> } = {};

  /**
   * If true, only one detail can be open at a time. If false, multiple details can be open simultaneously.
   * */
  @Input() singleOpen: boolean = false;

  /**
   * If true, the table accept sort on header table
   */
  @Input()  isSortable!: boolean;

  // ngb-pagination
  /**
   * If true the table will show the paginator element
   */
  @Input() isPaginated:boolean = true;
  /**
   * The maximum number of pages to display.
   */
  @Input() maxSize: number = 5;
  /**
   * The number of items per page.
   */
  @Input() pageSize: number = 2;

  /**
   * Total element of data
   */
  @Input() collectionSize!: any;

  /**
   * The current page.
   * Page numbers start with 1.
   */
  @Input() page: number = 1;
  /**
   * If `true`, pagination links will be disabled.
   */
  @Input() disabled!: boolean;
  /**
   * If `true`, the "First" and "Last" page links are shown.
   */
  @Input() boundaryLinks!: boolean;
  /**
   * If `true`, the "Next" and "Previous" page links are shown.
   */
  @Input() directionLinks!: boolean;
  /**
   * Represents the values for which the table size can be modified.
   */
  @Input() dropdownElements: any[] = [];


  /**
   * Emitter to capture the information of the clicked row.
   * */
  @Output() detailsEmitter: EventEmitter<any> = new EventEmitter<any>();

  /**
   * If variable isSortable is true, this emitting the information of column header clicked
   * and the order to be applied
   */
  @Output() sortableEmitter = new EventEmitter<SortEvent>();

  @Output() changePageEmitter = new EventEmitter<number>();

  @Output() selectEmitter = new EventEmitter<number>();

  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() detailsUpdate: EventEmitter<any> = new EventEmitter<any>();

  @Output() changeSwitchValue = new EventEmitter<any>();


  collapseStates: { [key: number]: boolean } = {};

  sortEvent: SortEvent = {
    sortColumn: '',
    sortDirection: ''
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  toggleCollapse(row: any, rowId: number, event: any) {
    const tdType = event.target.tagName.toLowerCase();

    if (tdType !== 'input') {
      if (this.collapseStates[rowId]) {
        this.detailsEmitter.emit({id: row.id});
      }
      if (!this.singleOpen) {
        this.collapseStates[rowId] = !this.collapseStates[rowId];
      } else {
        if (this.collapseStates[rowId]) {
          this.initiateCollapse();
        }
        this.collapseStates[rowId] = !this.collapseStates[rowId];
      }
    }
  }

  ngAfterViewInit() {
    this.initiateCollapse();
  }

  private initiateCollapse(){
    for (let i = 0; i < this.collectionSize; i++) {
      this.collapseStates[i] = true; // Inizializza tutti i collapse come aperti
    }
    this.cdr.detectChanges(); // Forza una nuova esecuzione della change detection
  }
  changePage(clickedPage: number) {
    this.initiateCollapse();
    this.changePageEmitter.emit(clickedPage);
  }
  selectSize(selectSize: number) {
    this.initiateCollapse();
    this.selectEmitter.emit(selectSize);
  }


  protected readonly TableHeadTheme = TableHeadTheme;

  sortingColumn(column: any): void {
    if (this.sortEvent.sortColumn === column) {
      if(this.sortEvent.sortDirection === SortDirection.DESCENDING){
        this.sortEvent.sortDirection = SortDirection.NONE;
      }else{
        this.sortEvent.sortDirection = this.sortEvent.sortDirection === SortDirection.ASCENDING ?
          SortDirection.DESCENDING : SortDirection.ASCENDING;
      }
    } else {
      // Set to ascending if a different column is clicked
      this.sortEvent.sortColumn = column;
      this.sortEvent.sortDirection = SortDirection.ASCENDING;
    }

    this.initiateCollapse();

    this.sortableEmitter.emit({
      sortColumn: this.sortEvent.sortColumn,
      sortDirection: this.sortEvent.sortDirection
    });
  }

  switchChange(event: any) {
    this.changeSwitchValue.emit(event);
  }

  getValueByPath(obj: any, path: string): any {
    const parts = path.split('.');
    let value = obj;
    for (const part of parts) {
      if (value.hasOwnProperty(part)) {
        value = value[part];
      }
    }
    return value;
  }

  isObject(input: any) {
    return typeof input === 'object';
  }
  protected readonly SortDirection = SortDirection;
  protected readonly ButtonTheme = ButtonTheme;
}

export interface SortEvent {
  sortColumn: any;
  sortDirection: 'asc' | 'desc' | '';
}
