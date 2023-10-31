import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {catchError, distinctUntilChanged, Observable,debounceTime, of, OperatorFunction, switchMap, tap} from "rxjs";
import {TwentyfiveGenericAutocompleteService} from "./twentyfive-generic-autocomplete.service";

@Component({
  selector: 'lib-twentyfive-autocomplete',
  templateUrl: './twentyfive-autocomplete.component.html',
  styleUrls: ['./twentyfive-autocomplete.component.css']
})
export class TwentyfiveAutocompleteComponent implements OnInit{

  @Input()
  model: FormControl = new FormControl();
  searching = false;
  searchFailed = false;

  @Input()
  isAsync: boolean = false;

  @Input()
  isPaginated: boolean = false;

  // Dataset is used if is NOT @async, so we have all the possible values in the client
  @Input()
  dataset: any[] = [];

  @Input()
  identifierField: string = 'id';

  @Input()
  textToShowField: string = 'textValue';

  // Service is used if is @async
  // Note that the service should be inserted as input, otherwise the service called will be an empty box
  @Input()
  service: TwentyfiveGenericAutocompleteService | undefined;

  @Input()
  debounceTime: number = 300;

  @Output()
  onElementSelected: EventEmitter<any> = new EventEmitter<any>();




  ngOnInit() {
  }


  search: OperatorFunction<string, any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => {
          if(this.isAsync){
            return this.service?.search(term).pipe(
              tap(() => this.searchFailed = false),
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
        if(this.isPaginated){
          return of(elem['content']);
        }
        return of(elem);
      }),
      tap(() => this.searching = false)
    )

  formatter = (x: any) => {
    console.log("FORMATTO");
    console.log(x);
    return x[this.textToShowField];
  }

  searchSyncInDataset(term: string){
    const result = this.dataset.filter( element => {
      const fieldToMatch = (element[this.identifierField] as string).toUpperCase();
      const termToMatch = term.toUpperCase();
      return fieldToMatch.includes(termToMatch);
    });
    return of(result);
  }

  elementClicked(r: any){
    this.model = r[this.textToShowField];
    this.onElementSelected.emit(r);
  }

}
