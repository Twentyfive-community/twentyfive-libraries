import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {catchError, distinctUntilChanged, Observable, debounceTime, of, OperatorFunction, switchMap, tap} from "rxjs";
import {TwentyfiveGenericAutocompleteService} from "./twentyfive-generic-autocomplete.service";
import {InputTheme, LabelTheme} from "twentyfive-style";


@Component({
  selector: 'lib-twentyfive-autocomplete',
  templateUrl: './twentyfive-autocomplete.component.html',
  styleUrls: ['./twentyfive-autocomplete.component.css']
})
export class TwentyfiveAutocompleteComponent {

  @ViewChild('autocompleteElement') autocompleteElement: ElementRef | undefined;
  @ViewChild('autocompleteAppendElement') autocompleteAppendElement: ElementRef | undefined;

  @Input() model: FormControl = new FormControl();

  searching = false;
  searchFailed = false;

  @Input() isAsync: boolean = false;

  @Input() isPaginated: boolean = false;

  // Dataset is used if is NOT @async, so we have all the possible values in the client
  @Input() dataset: any[] = [];
  @Input() identifierField: string = 'id';
  @Input() textToShowField: string = 'textValue';

  // Service is used if is @async
  // Note that the service should be inserted as input, otherwise the service called will be an empty box
  @Input() service: TwentyfiveGenericAutocompleteService | undefined;

  @Input() debounceTime: number = 300;

  @Output() onElementSelected: EventEmitter<any> = new EventEmitter<any>();

  @Input() inputStyle: any;
  @Input() labelStyle: any;
  @Input() customCssClass: string = '';
  @Input() customLabelClass: string = '';
  @Input() labelText: string = '';
  @Input() placeholder: string = 'Cerca...';
  @Input() searchingText: string = 'Searching...';
  @Input() invalidText: string = 'Sorry, suggestions could not be loaded.';
  @Input() showLabel: boolean = true;
  @Output() changeValue = new EventEmitter<any>();
  @Input() value: any;
  @Input() pivotSearch: any

  @Input() showHint: boolean = false

  @Input() appendIcon = 'bi bi-x'
  @Input() showAppend = false;
  @Input() disabled = false;


  private debounceTimer: any;
  private currentAutocompleteValue = '';

  initializeInitialSearch(event: any): void {
    const inputElement = event.target as HTMLInputElement;

    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
    inputElement.dispatchEvent(inputEvent);
  }

  search: OperatorFunction<string, any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => {
          this.currentAutocompleteValue = term;
          if (this.isAsync) {
            if (!term) {
              return this.service?.search('', this.pivotSearch).pipe(
                tap(results => {
                  this.searchFailed = false;
                }),
                catchError((err) => {
                  this.searchFailed = true;
                  return of([]);
                })) ?? of([]);
            }
            if(term.trim().length === 0) {
              return of([]);
            }
            return this.service?.search(term, this.pivotSearch).pipe(
              tap(results => {
                this.searchFailed = false;
              }),
              catchError(() => {
                this.searchFailed = true;
                return of([]);
              })) ?? of([]);
          } else {
            return this.searchSyncInDataset(term);
          }
        }
      ),
      switchMap(elem => {
        if (this.isPaginated) {
          return of(elem['content']);
        }
        return of(elem);
      }),
      tap(() => this.searching = false)
    )

  formatter = (x: any) => {
    return x[this.textToShowField];
  }

  searchSyncInDataset(term: string) {
    const result = this.dataset.filter(element => {
      const fieldToMatch = (element[this.identifierField] as string).toUpperCase();
      const termToMatch = term.toUpperCase();
      return fieldToMatch.includes(termToMatch);
    });
    return of(result);
  }

  change(event: any) {
    // Clear any existing debounce timer
    clearTimeout(this.debounceTimer);

    // Set a new debounce timer
    this.debounceTimer = setTimeout(() => {

        this.changeValue.emit(null);
    }, this.debounceTime); // Wait for 200m

  }

  onItemSelect(event: any) {
    this.onElementSelected.emit(event);

    this.resetField();

    if (this.autocompleteElement) {
      const inputElement = this.autocompleteElement.nativeElement;
      inputElement.blur(); // toglie focus all'input
      setTimeout(() => {
        inputElement.focus(); // rimette focus all'input
      }, 0); // Ritardo minimo
    }

    if (this.autocompleteAppendElement) {
      const inputElement = this.autocompleteAppendElement.nativeElement;
      inputElement.blur();
      setTimeout(() => {
        inputElement.focus();
      }, 0);
    }
  }

  protected readonly InputTheme = InputTheme;
  protected readonly LabelTheme = LabelTheme;

  resetField() {
    setTimeout(() => {
      if (this.autocompleteAppendElement) {
        this.autocompleteAppendElement!.nativeElement.value = '';
        this.currentAutocompleteValue = '';
        this.changeValue.emit(null);
        this.autocompleteAppendElement!.nativeElement.focus();
      } else if (this.autocompleteElement) {
        this.autocompleteElement!.nativeElement.value = '';
        this.currentAutocompleteValue = '';
        this.changeValue.emit(null);
        this.autocompleteElement!.nativeElement.focus();
      }
    }, 0);
  }
}
