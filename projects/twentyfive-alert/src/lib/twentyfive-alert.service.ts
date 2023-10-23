import { Injectable } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveAlertService {

  constructor(private service: NgbModal) { }

  openAlert(template: any){
    this.service.open(template, {size: "xl"})
  }
}
