import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-error-page',
  templateUrl: './twentyfive-error-page.component.html'
})
export class TwentyfiveErrorPageComponent {

  @Input() imageUrl: string = "assets/images/error-page.png";
  @Input() title: string = "Houston, abbiamo un problema...";
  @Input() subtitle: string = "Attualmente ci sono difficoltà a stabilire una connessione al server. Per favore, aspetta un momento e prova a ricaricare la pagina.";


}
