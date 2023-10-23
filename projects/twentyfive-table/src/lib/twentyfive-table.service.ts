import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveTableService {

  constructor() { }

  getRow(row: any) {
    console.log('la mia riga :', row);
  }
}
