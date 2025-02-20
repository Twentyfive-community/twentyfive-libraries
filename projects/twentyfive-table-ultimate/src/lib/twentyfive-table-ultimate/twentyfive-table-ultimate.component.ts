import {Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef} from '@angular/core';
import {ButtonTheme, SwitchTheme, TableHeadTheme, TableTheme } from 'twentyfive-style';
import {SortDirection} from '../models/sort-direction';
import {TableHeader} from "../models/table-headers";
import {TableState} from "../models/table-state";
import {SortEvent} from "../models/sort-event";

@Component({
  selector: 'lib-twentyfive-table-ultimate',
  templateUrl: './twentyfive-table-ultimate.component.html',
  styleUrls: ['./twentyfive-table-ultimate.component.css']
})
export class TwentyfiveTableUltimateComponent implements OnInit, OnChanges {

  /* STILI TABLE */
  @Input() tableStyle: any;
  @Input() customCssClass: string = '';
  @Input() tableHeadStyle: any;
  @Input() customHeaderClass: string = '';
  @Input() maxWidthValue: string = '15vw';

  /* DATI */
  /** Lista degli header della table */
  @Input() headers: TableHeader[] = [];
  /** Lista di elementi per le righe della table */
  @Input() rows: any[] = [];
  /** Numero totale di elementi nella tabella */
  @Input() totalElements: number = 0;

  /* COLONNE CUSTOM */
  /**
   * Mappa di template personalizzati per le colonne della tabella.
   *
   * Key è il value header della colonna,
   * mentre il valore è un `TemplateRef` da applicare a quella specifica colonna.
   */
  @Input() columnTemplateRefs: { [key: string]: TemplateRef<any> } = {};


  /* SWITCH */
  /** Se true mostra colonna switch */
  @Input() showSwitch: boolean = false;
  /** Stile dello Switch */
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;
  /** Testo per l'header della colonna switch */
  @Input() switchHeaderText: string = 'Off/On';
  /** Testo accanto allo switch */
  @Input() switchText: string = '';

  /* ACTION */
  /** Se true, mostra la colonna delle actions */
  @Input() showActions: boolean = false;
  /** Lista di action disponibili per ogni riga */
  @Input() actions: any = [];

  /* ACCORDION */
  /** Se true, attiva la modalità accordion e visualizza accordionTemplateRef quando aperta */
  @Input() isAccordion: boolean = false;
  /** tempalteRef da visualizzare come accordion della riga */
  @Input() accordionTemplateRef?: TemplateRef<any>;

  /* SORTING */
  /** Se true le colonne saranno sortable */
  @Input() isSortable = false;

  /* PAGINATION */
  /** Se true abilita paginazione e sizing*/
  @Input() isPaginated: boolean = true;
  /** Mostra/nasconde i puntini di sospensione nel paginator */
  @Input() ellipsisBoolean: boolean = false;
  /** Numero massimo di pagine visibili nel paginator  */
  @Input() maxSize: number = 3
  /**  */
  @Input() rotate: boolean = true;
  /** Numero di elementi per pagina */
  @Input() pageSize: number = 5;
  /** Stile del paginator */
  @Input() paginationStyle: any;

  /* DROPDOWN */
  /** Elementi del dropdown per selezionare le righe per pagina */
  @Input() dropdownElements: any[] = [];

  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() checkedField: string = '';

  /* OUTPUT */
  @Output() rowClicked = new EventEmitter<any>();
  @Output() switchClick = new EventEmitter<any>();
  @Output() tableStateChange = new EventEmitter<TableState>();


  /** pagina attuale */
  page: number = 0;
  /** totale pagine */
  totalPages: number = 0;
  /** totale elementi nella table
   * ridondante con totalElement
   * attualmente utilizzato al posto di maxSize nel paginator
   */
  collectionSize: number = 0

  sortEvent: SortEvent = {
    sortColumn: '',
    sortDirection: SortDirection.NONE
  };

  tableState: TableState = {
    page: 0,
    pageSize: 5,
    sortColumn: '',
    sortDirection: SortDirection.NONE
  };

  /** Traccia index della row attualmente aperta in accordio */
  expandedRowIndex: number = -1;


  ngOnInit() {
    this.updatePagination();
  }

  ngOnChanges() {
    this.updatePagination();
  }

  updatePagination() {
    if (this.totalElements > 0) {
      this.collectionSize = this.totalElements;
      this.totalPages = Math.ceil(this.totalElements / this.pageSize);
    }
  }

  onRowClick(index: number, row: any): void {
    if (this.isAccordion) {
      this.expandedRowIndex = (this.expandedRowIndex === index) ? -1 : index;
    }
    this.rowClicked.emit(row);
  }

  emitTableState() {
    this.expandedRowIndex = -1;

    this.tableState = {
      page: this.page-1,
      pageSize: this.pageSize,
      sortColumn: this.sortEvent.sortColumn,
      sortDirection: this.sortEvent.sortDirection
    };

    this.tableStateChange.emit(this.tableState);
  }

  sortingColumn(column: string): void {

    if (this.sortEvent.sortColumn === column) {
      this.sortEvent.sortDirection =
        this.sortEvent.sortDirection === SortDirection.DESCENDING
          ? SortDirection.NONE
          : this.sortEvent.sortDirection === SortDirection.ASCENDING
            ? SortDirection.DESCENDING
            : SortDirection.ASCENDING;
    } else {
      this.sortEvent.sortColumn = column;
      this.sortEvent.sortDirection = SortDirection.ASCENDING;
    }

    this.emitTableState();
  }

  onPaginationChange(newPage: number, newPageSize: any) {
    this.page = newPage;
    this.pageSize = parseInt(newPageSize, 10);

    this.emitTableState();
  }


  protected readonly TableHeadTheme = TableHeadTheme;
  protected readonly TableTheme = TableTheme;
  protected readonly ButtonTheme = ButtonTheme;
  protected readonly SortDirection = SortDirection;
}
