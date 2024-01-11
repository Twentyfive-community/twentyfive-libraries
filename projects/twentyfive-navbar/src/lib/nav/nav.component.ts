import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ButtonSizeTheme, ButtonTheme, NavbarTheme} from "twentyfive-style";

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('navHeight', [
      state('false', style({height: '100vh'})),
      state('true', style({height: '*'})),
      transition('false => true', animate('500ms ease-out')),
      transition('true => false', animate('500ms ease-in'))
    ])
  ]
})
export class NavComponent implements OnInit {

  @Input() showAll = true;
  @Input() navbarLogo = "assets/white-logo-only.png";
  @Input() navbarNavigationUrl = "/qrcodetable";
  @Input() title = "";
  @Input() sidebarItems: any[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() logoWidth = 32;
  @Input() logoHeigth = 32;
  @Input() navbarStyle: any;
  @Input() customCssClass: string = '';

  showNavbar: boolean = true;
  @Input() showLogo: boolean = true;
  @Input() showLeftTitle: boolean = true;
  isCollapsed: boolean = true;


  constructor() {
  }

  ngOnInit() {
  }

  expandNav(elem: any) {
    this.isCollapsed = !this.isCollapsed;
  }

  emitEvent($event: any) {
    this.onClick.emit($event);
  }

  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  protected readonly NavbarTheme = NavbarTheme;
}
