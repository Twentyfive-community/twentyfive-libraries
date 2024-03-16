import {Component, Input} from '@angular/core';
import {emptyFunction} from "../constants/emptyFunction";
import {ButtonSizeTheme, ButtonTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-modal',
  templateUrl: `./twentyfive-modal.component.html`
})
export class TwentyfiveModalComponent {
  @Input() bodyText: string = '';
  @Input() modalTitle: string = '';
  @Input() icon: string = '';
  @Input() cancelButtonText: string = '';
  @Input() confirmButtonText: string = '';

  @Input() cancelButtonStyle: any;
  @Input() cancelButtonSize: any;
  @Input() confirmButtonStyle: any;
  @Input() confirmButtonSize: any;
  @Input() onClose: any;
  @Input() crossClicked: any;
  @Input() onConfirm: any = emptyFunction;

  @Input() showHeaderTitle: boolean = true;
  @Input() showIcon: boolean = false;

  protected ButtonTheme = ButtonTheme;
  protected ButtonSizeTheme = ButtonSizeTheme;
}
