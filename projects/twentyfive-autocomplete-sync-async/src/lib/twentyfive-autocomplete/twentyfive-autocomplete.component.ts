import {Component, EventEmitter, Input, Output} from '@angular/core';
import {catchError, distinctUntilChanged, debounceTime, of, switchMap, tap} from "rxjs";
import {TwentyfiveGenericAutocompleteService} from "./twentyfive-generic-autocomplete.service";
import {ButtonTheme, InputTheme} from "twentyfive-style";


@Component({
  selector: 'lib-twentyfive-autocomplete',
  templateUrl: './twentyfive-autocomplete.component.html',
  styleUrls: ['./twentyfive-autocomplete.component.css']
})
export class TwentyfiveAutocompleteComponent {

  @Input() service!: TwentyfiveGenericAutocompleteService;
  @Input() dataset: any[] = []; // Dataset statico o dinamico
  @Input() debounceTime: number = 300;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() labelText: string = 'Autocomplete'
  @Input() inputStyle: any;
  @Input() buttonStyle: any;
  @Input() placeholder: string = 'Cerca...';
  @Input() textField: string = 'name';
  @Input() keepSelectedValue: boolean = false; // Mantieni il valore selezionato
  @Input() resetButton: boolean = true; // Mostra il pulsante di reset
  @Input() maxResults: number = 5; // Numero massimo di risultati da mostrare nella dropdown

  @Input() customInputStyles: { [key: string]: any } = {};
  @Input() customButtonStyles: { [key: string]: any } = {};

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() fieldReset: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchFailed: EventEmitter<void> = new EventEmitter<void>();

  searchResults: any[] = [];
  searchFailedFlag: boolean = false;
  isSearching: boolean = false;
  currentValue: string = ''; // Valore corrente nell'input

  search(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const term = inputElement.value;

    this.currentValue = term;

    if (!term || term.trim().length === 0) {
      this.searchResults = [];
      return;
    }

    this.isSearching = true;
    if (this.dataset.length > 0) {
      const results = this.dataset.filter(item =>
        item[this.textField]?.toLowerCase().includes(term.toLowerCase())
      );
      this.searchResults = results.slice(0, this.maxResults);
      this.isSearching = false;
    } else if (this.service) {
      this.service.search(term.trim())
        .pipe(
          debounceTime(this.debounceTime),
          distinctUntilChanged(),
          switchMap((results: any[]) => of(results)),
          tap(() => {
            this.searchFailedFlag = false;
            this.isSearching = false;
          }),
          catchError(() => {
            this.searchFailedFlag = true;
            this.isSearching = false;
            this.searchFailed.emit();
            return of([]);
          })
        )
        .subscribe((results: any[]) => {
          this.searchResults = results.slice(0, this.maxResults);
        });
    }
  }

  selectItem(event: any): void {
    this.currentValue = this.keepSelectedValue ? event[this.textField] : '';
    this.itemSelected.emit(event);
    this.searchResults = [];

    if (!this.keepSelectedValue) {
      setTimeout(() => this.resetField(), 0);
    }
  }

  resetField(): void {
    this.currentValue = '';
    this.searchResults = [];
    this.isSearching = false;
    this.searchFailedFlag = false;
    this.fieldReset.emit();

  }

  protected readonly InputTheme = InputTheme;
  protected readonly ButtonTheme = ButtonTheme;
}
