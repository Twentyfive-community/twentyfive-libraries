import {Component, EventEmitter, Input, Output} from '@angular/core';
import {emptyFunction} from "./emptyFunction";

@Component({
  selector: 'lib-twentyfive-menu-item',
  templateUrl: `./twentyfive-menu-item.component.html`
})
export class TwentyfiveMenuItemComponent {

  @Input() menuItem: any;

  @Input() click: any = emptyFunction;
  @Input() disable: boolean | undefined = false;
  @Input() labelColor: string = '';
  @Input() inputColor: string = '';
  @Input() type: string = 'STANDARD';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  emitEvent() {
    this.onClick.emit(this.menuItem);
    this.click();
  }
}
