import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveModalGenericComponentService {

  constructor(private ngModalService: NgbModal) {
  }


  open(template: any,
       size: string,
       {
         centered = true,
         keyboard = true,
         backdropClass = 'modal-backdrop',
       }, backdrop?: "static" | boolean | undefined) {
    return this.ngModalService.open(template, {
      size: size,
      centered: centered,
      backdropClass: backdropClass ?? undefined,
      keyboard: keyboard ?? true,
      backdrop: backdrop ?? 'static'
    });
  }

  close(param?: any) {
    this.ngModalService.dismissAll(param);
  }
}
