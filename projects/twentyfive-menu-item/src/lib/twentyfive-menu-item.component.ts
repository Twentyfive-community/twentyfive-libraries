import {Component, Input} from '@angular/core';
import {emptyFunction} from "./emptyFunction";

@Component({
  selector: 'lib-twentyfive-menu-item',
  templateUrl: `./twentyfive-menu-item.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveMenuItemComponent {
  @Input() labelText: string | undefined | null = 'Text';
  @Input() icon: string | undefined | null = '';
  @Input() navigationUrl: string | undefined | null = '';
  @Input() click: any = emptyFunction;
}
