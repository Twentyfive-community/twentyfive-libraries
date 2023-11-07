import { Injectable } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveModalGenericComponentService {

  constructor(private ngModalService: NgbModal) {
  }


  open(template: any, size: string) {
    return this.ngModalService.open(template, {
      size: size,
      centered: true
    });
  }

  close() {
    this.ngModalService.dismissAll();
  }
}
