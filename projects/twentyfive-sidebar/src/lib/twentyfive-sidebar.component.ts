import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-sidebar',
  templateUrl: `./twentyfive-sidebar.component.html`
})
export class TwentyfiveSidebarComponent {
  @Input() sidebarItems: any[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();


  emitEvent($event: any) {
    this.onClick.emit($event);
  }
}
