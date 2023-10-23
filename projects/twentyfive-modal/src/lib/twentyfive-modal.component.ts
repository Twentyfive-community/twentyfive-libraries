import {Component, Input} from '@angular/core';
import {emptyFunction} from "./emptyFunction";
import {ButtonSizeTheme, ButtonTheme} from "generic-buttons";

@Component({
  selector: 'lib-twentyfive-modal',
  templateUrl: `./twentyfive-modal.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveModalComponent {
  @Input() bodyText: string = '';
  @Input() modalTitle: string = '';
  @Input() icon: string = '';
  @Input() cancelButtonText: string = '';
  @Input() cancelButtonStyle: ButtonTheme = ButtonTheme.Secondary;
  @Input() cancelButtonSize: ButtonSizeTheme = ButtonSizeTheme.Small;
  @Input() confirmButtonText: string = '';
  @Input() confirmButtonStyle: ButtonTheme = ButtonTheme.Primary;
  @Input() confirmButtonSize: ButtonSizeTheme = ButtonSizeTheme.Small;
  @Input() showHeaderTitle: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() onConfirm: any = emptyFunction;
  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
  @Input() onClose: any;
}
