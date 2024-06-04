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
  @Input() navbarNavigationUrl = "";
  @Input() title = "";
  @Input() sidebarItems: any[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() logoWidth = 32;
  @Input() logoHeigth = 32;
  @Input() navbarStyle: any;
  @Input() customCssClass: string = '';

  showNavbar: boolean = true;
  @Input() showSideMenu: boolean = true;
  @Input() showLogo: boolean = true;
  @Input() logoCentered: boolean = false;
  @Input() showLeftTitle: boolean = true;
  @Input() showInlineElements: boolean = false;
  @Input() onlyIcon: boolean = false;

  itemLeft: any[] = [];
  itemRight: any[] = [];

  isCollapsed: boolean = true;


  constructor() {
  }

  ngOnInit() {
    if (this.logoCentered) {
      this.splitSidebarItems();
    }
  }

  splitSidebarItems(): void {
    if (this.sidebarItems.length === 0) return;

    this.sidebarItems.forEach((item, index) => {
      if (index % 2 === 0) {
        this.itemLeft.push(item);
      } else {
        this.itemRight.push(item);
      }
    });
  }

  expandNav(elem: any) {
    this.emitEvent(elem);
    this.isCollapsed = !this.isCollapsed;
  }

  emitEvent($event: any) {
    this.onClick.emit($event);
  }

  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  protected readonly NavbarTheme = NavbarTheme;
}
