import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {pipe} from "rxjs";
import {emptyFunction} from "../constants/emptyFunction";
import {TwentyfiveModalComponent} from "./twentyfive-modal.component";
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveModalService {

  modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) {
  }


  openModal(
    bodyText: string,
    modalTitle: string,
    cancelButtonText: string,
    confirmButtonText: string,
    {
      onAbort = emptyFunction,
      onClose = emptyFunction,
      onConfirm = emptyFunction,
      icon = 'bi bi-exclamation-circle',
      size = 'lg',
      showHeaderTitle = true,
      showIcon = false,
      cancelButtonStyle = ButtonTheme.Secondary,
      confirmButtonStyle = ButtonTheme.Primary,
      confirmButtonSize = ButtonSizeTheme.Small,
      cancelButtonSize = ButtonSizeTheme.Small,
    }
  ) {
    this.modalRef = this.modalService.open(
      TwentyfiveModalComponent,
      {
        centered: true,
        size: size,
        backdrop: 'static',
      });

    let finalFunction = pipe(onConfirm, this.closing);
    let onAbortFunction = pipe(onAbort, this.closing);
    this.modalRef.componentInstance.bodyText = bodyText;
    this.modalRef.componentInstance.modalTitle = modalTitle;
    this.modalRef.componentInstance.confirmButtonText = confirmButtonText;
    this.modalRef.componentInstance.cancelButtonText = cancelButtonText;
    this.modalRef.componentInstance.icon = icon;
    this.modalRef.componentInstance.showHeaderTitle = showHeaderTitle;
    this.modalRef.componentInstance.showIcon = showIcon;
    this.modalRef.componentInstance.confirmButtonStyle = confirmButtonStyle;
    this.modalRef.componentInstance.cancelButtonStyle = cancelButtonStyle;
    this.modalRef.componentInstance.cancelButtonSize = cancelButtonSize;
    this.modalRef.componentInstance.confirmButtonSize = confirmButtonSize;
    this.modalRef.componentInstance.onAbort = onAbortFunction;
    this.modalRef.componentInstance.onConfirm = finalFunction;
    this.modalRef.componentInstance.onClose = () => {
      onClose();
      this.closing();
    };
  }

  closing = () => {
    this.modalRef?.close();
  }
}
