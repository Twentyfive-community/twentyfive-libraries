import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";
import {TwentyfiveModalGenericComponentService} from "twentyfive-modal-generic-component";

@Component({
  selector: 'lib-twentyfive-cookie-modal-detailed',
  templateUrl: './twentyfive-cookie-modal-detailed.component.html',
})
export class TwentyfiveCookieModalDetailedComponent implements AfterViewInit {

  @Input() userPreferences: any = [];
  @Input() viewDetailed = true;
  @Output() closeDetailedModal: any = new EventEmitter<any>();
  @Output() openEntireCookiePolicy: any = new EventEmitter<any>();

  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  protected readonly ButtonTheme = ButtonTheme;

  allOptionCode: string = '000-001';

  cookieModalList = [
    {
      code: '000-002',
      title: 'Necessari',
      description: 'Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso.',
      value: false
    },
    {
      code: '000-003',
      title: 'Funzionalità',
      description: 'Questi strumenti di tracciamento abilitano semplici interazioni e funzionalità che ti permettono di accedere a determinate risorse del nostro servizio e ti consentono di comunicare più facilmente con noi.',
      value: false
    },
    {
      code: '000-004',
      title: 'Esperienza',
      description: 'Questi strumenti di tracciamento ci permettono di migliorare la qualità della tua esperienza utente e consentono le interazioni con piattaforme, reti e contenuti esterni.',
      value: false
    },
    {
      code: '000-005',
      title: 'Misurazione',
      description: 'Questi strumenti di tracciamento ci permettono di misurare il traffico e analizzare il tuo comportamento per migliorare il nostro servizio.',
      value: false
    },
    {
      code: '000-006',
      title: 'Marketing',
      description: 'Questi strumenti di tracciamento ci permettono di fornirti contenuti marketing o annunci personalizzati e di misurarne la performance.',
      value: false
    },
  ]

  constructor(private modalService: TwentyfiveModalGenericComponentService) {

  }

  ngAfterViewInit() {
    this.setupUserPreferences();
  }

  close(action?: string) {
    if (action) {
      switch (action) {
        case 'accept':
          this.modalService.close({code: this.allOptionCode, value: true});
          // this.closeDetailedModal.emit({code: this.allOptionCode, value: true});
          break;
        case 'reject':
          this.modalService.close({code: this.allOptionCode, value: false});
          // this.closeDetailedModal.emit({code: this.allOptionCode, value: false});
          break;
        case 'save':
          this.modalService.close(this.composeParams());
          // this.closeDetailedModal.emit(this.composeParams());
          break;
      }
    } else {
      this.closeDetailedModal.emit();
    }
  }

  openEntire() {
    this.openEntireCookiePolicy.emit();
  }

  composeParams() {
    //check if all elements in cookieModalList has same value in value property of each element
    let value = this.cookieModalList[0].value;
    let allSame = this.cookieModalList.every((el) => el.value === value);
    if (allSame) {
      return {code: this.allOptionCode, value: value};
    } else {
      //return array of objects with code and value properties
      return this.cookieModalList.map((el) => {
        return {code: el.code, value: el.value}
      });
    }
  }


  changeValueList($event: any) {
    //$event is an object with code and value properties, find in cookieModalList the element with the same code and change its value property
    let index = this.cookieModalList.findIndex((el) => el.code === $event.code);
    this.cookieModalList[index].value = $event.value;
  }

  private setupUserPreferences() {

    // Check if userPreferences exists and is an array
    if (Array.isArray(this.userPreferences) && this.userPreferences.length > 0) {
      this.cookieModalList.forEach((el) => {
        let index = this.userPreferences.findIndex((pref: any) => pref.code === el.code);
        if (index > -1) {
          // If the preference for the current element is found, set its value
          el.value = this.userPreferences[index].value;
        }
      });
    } else if (this.userPreferences && typeof this.userPreferences === 'object') {
      // Handle the case where userPreferences is a single object
      if (typeof this.userPreferences.value === 'boolean') {
        // If value is true, apply it to all elements in cookieModalList
        // If value is false, also apply it to all elements in cookieModalList
        this.cookieModalList.forEach((el) => {
          el.value = this.userPreferences.value;
        });
      } else {
        // If userPreferences is a single object but doesn't match the expected pattern,
        // You might want to handle this case separately or log an error.
        console.error("Unexpected userPreferences format", this.userPreferences);
      }
    } else {
      // If userPreferences is not set or empty, you might want to set a default state
      // for cookieModalList or handle this scenario as needed.
      console.log("No user preferences set");
    }
  }

}
