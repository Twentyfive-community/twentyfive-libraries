import {Component, EventEmitter, Input, Output} from '@angular/core';
import {emptyFunction} from "./emptyFunction";

@Component({
  selector: 'lib-twentyfive-menu-item',
  templateUrl: `./twentyfive-menu-item.component.html`
})
export class TwentyfiveMenuItemComponent {

  @Input() menuItem: any;

  @Input() labelText: string | undefined | null = 'Text';
  @Input() icon: string | undefined | null = '';
  @Input() navigationUrl: string | undefined | null = '';
  @Input() click: any = emptyFunction;
  @Input() disable: boolean | undefined = false;
  @Input() labelColor: string = '';
  @Input() inputColor: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  emitEvent() {
    this.onClick.emit(this.menuItem);
    this.click();
  }
}
