import {Component, Input} from '@angular/core';
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-not-found',
  templateUrl: `./twentyfive-not-found.component.html`
})
export class TwentyfiveNotFoundComponent {
  @Input() imageUrl: string = "assets/images/404 grafica.svg";
  @Input() title: string = "Oops! Sembra che tu abbia smarrito la strada";
  @Input() subtitle: string = "Sei finito in una zona digitale sconosciuta, ma non preoccuparti, siamo qui per aiutarti a ritrovare la via!";

  @Input() routerLink: string = '/home';

  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
}
