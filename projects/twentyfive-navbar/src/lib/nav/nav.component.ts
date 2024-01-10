import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  @Input() title = "Navbar";
  @Input() sidebarItems: any[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();




  showNavbar: boolean = true;
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
}
