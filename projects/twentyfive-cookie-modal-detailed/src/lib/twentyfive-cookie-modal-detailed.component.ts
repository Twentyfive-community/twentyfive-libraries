import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-cookie-modal-detailed',
  templateUrl: './twentyfive-cookie-modal-detailed.component.html',
})
export class TwentyfiveCookieModalDetailedComponent {

  @Output() closeDetailedModal: any = new EventEmitter<any>();
  @Output() openEntireCookiePolicy: any = new EventEmitter<any>();

  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  protected readonly ButtonTheme = ButtonTheme;

  cookieModalList = [
    {
      title: 'Necessari',
      description: 'Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso.',
      value: false
    },
    {
      title: 'Funzionalità',
      description: 'Questi strumenti di tracciamento abilitano semplici interazioni e funzionalità che ti permettono di accedere a determinate risorse del nostro servizio e ti consentono di comunicare più facilmente con noi.',
      value: false
    },
    {
      title: 'Esperienza',
      description: 'Questi strumenti di tracciamento ci permettono di migliorare la qualità della tua esperienza utente e consentono le interazioni con piattaforme, reti e contenuti esterni.',
      value: false
    },
    {
      title: 'Misurazione',
      description: 'Questi strumenti di tracciamento ci permettono di misurare il traffico e analizzare il tuo comportamento per migliorare il nostro servizio.',
      value: false
    },
    {
      title: 'Marketing',
      description: 'Questi strumenti di tracciamento ci permettono di fornirti contenuti marketing o annunci personalizzati e di misurarne la performance.',
      value: false
    },
  ]

  close() {
    this.closeDetailedModal.emit();
  }

  openEntire() {
    this.openEntireCookiePolicy.emit();
  }
}
