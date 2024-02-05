import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class TwentyfiveGenericAutocompleteService {


  /**
  *  Gestione Cerca autocomplete
   *
   *  @param search il testo inserito nella finesstra di cerca
   *  @param pivotSearch il volore 'perno' nel caso il metodo cerca
   *  ha bisogno di un oggetto o altro valore su cui cercare
   *
   *  @return Observable contiente i valori di match della ricerca
  * */

  abstract search(search:string, pivotSearch?:any): Observable<any>;
}
