import {Component, Input, OnInit} from '@angular/core';
import {ButtonSizeTheme, ButtonTheme} from "twentyfive-style";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lib-twentyfive-not-found',
  templateUrl: `./twentyfive-not-found.component.html`
})
export class TwentyfiveNotFoundComponent implements OnInit {
  @Input() imageUrl: string = "assets/images/404.svg";
  @Input() title: string = "Oops! Sembra che tu abbia smarrito la strada";
  @Input() subtitle: string = "Sei finito in una zona digitale sconosciuta, ma non preoccuparti, siamo qui per aiutarti a ritrovare la via!";

  @Input() routerLink: string = '/home';

  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.imageUrl = data.imageUrl || this.imageUrl;
      this.title = data.title || this.title;
      this.subtitle = data.subtitle || this.subtitle;
      this.routerLink = data.routerLink || this.routerLink;
    });
  }
}
