import {Component, Input} from '@angular/core';
import { AlertTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-alert',
  templateUrl: `./twentyfive-alert.component.html`
})
export class TwentyfiveAlertComponent {
  @Input() showIcon: boolean = true;
  @Input() showStrongMessage: boolean = false;
  @Input() showCloseButton: boolean = true;
  @Input() icon: string = '';
  @Input() message: string = 'Message!';
  @Input() strongMessage: string = 'Strong message!';

  @Input() alertStyle: AlertTheme = AlertTheme.Primary;

  @Input() customCssClass: string = '';
  @Input() customIconClass: string = '';

  protected readonly AlertTheme : any;
}


