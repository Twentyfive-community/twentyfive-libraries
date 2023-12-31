import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class TwentyfiveGenericAutocompleteService {

  abstract search(search:string): Observable<any>;
}
