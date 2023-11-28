import {Component, Input} from '@angular/core';
import {emptyFunction} from "./emptyFunction";
import {ButtonSizeTheme, ButtonTheme} from "generic-button";

@Component({
  selector: 'lib-twentyfive-modal',
  templateUrl: `./twentyfive-modal.component.html`
})
export class TwentyfiveModalComponent {
  @Input() bodyText: string = '';
  @Input() modalTitle: string = '';
  @Input() icon: string = '';
  @Input() cancelButtonText: string = '';
  @Input() cancelButtonStyle: any;
  @Input() cancelButtonSize: any;
  @Input() confirmButtonText: string = '';
  @Input() confirmButtonStyle: any;
  @Input() confirmButtonSize: any;
  @Input() showHeaderTitle: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() onConfirm: any = emptyFunction;
  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  @Input() onClose: any;
}
