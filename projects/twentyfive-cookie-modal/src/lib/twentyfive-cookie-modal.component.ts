import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TwentyfiveModalGenericComponentService} from "twentyfive-modal-generic-component";
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-cookie-modal',
  templateUrl: './twentyfive-cookie-modal.component.html',
})
export class TwentyfiveCookieModalComponent {

  allOptionCode: string = '000-001';

  @Input() title: string = 'Informativa';
  @Input() htmlContent: string = '<p>Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per altre finalità\n' +
    '        come specificato nella\n' +
    '        <a (click)="openEntire()" style="color: #1A1660; cursor:pointer;">cookie policy</a>.\n' +
    '        Usa il pulsante “Accetta” per acconsentire. Usa il pulsante “Rifiuta” o chiudi questa informativa per continuare senza accettare.</p>';

  @Output() openDetailedModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() openEntireCookiePolicy: any = new EventEmitter<any>();


  constructor(private modalService: TwentyfiveModalGenericComponentService) {

  }
  close(valueSelected?: any) {
    this.modalService.close({code: this.allOptionCode, value: valueSelected});
  }

  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  protected readonly ButtonTheme = ButtonTheme;

  openDetailedPopup() {
    this.openDetailedModal.emit();
  }

  openEntire() {
    this.openEntireCookiePolicy.emit();
  }
}
