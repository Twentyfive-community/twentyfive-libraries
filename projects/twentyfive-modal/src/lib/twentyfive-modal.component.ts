import {Component, Input} from '@angular/core';
import {emptyFunction} from "./emptyFunction";

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
  @Input() onConfirm: any = emptyFunction;

  @Input() showHeaderTitle: boolean = true;
  @Input() showIcon: boolean = false;

  protected ButtonTheme: any;
  protected ButtonSizeTheme: any;
}
