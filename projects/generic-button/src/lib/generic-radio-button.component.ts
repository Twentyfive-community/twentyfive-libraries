import {Component, Input} from '@angular/core';
import { RadioButtonTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-generic-radio-button',
  templateUrl: './generic-radio-button.component.html',
  styleUrls: ['./generic-radio-button.component.scss']
})
export class GenericRadioButtonComponent {

  @Input() labelText: string  = 'Text';
  @Input() name: string  = '';
  @Input() id: string  = '';
  @Input() checked: boolean  = false;
  @Input() disabled: boolean  = false;
  @Input() radioButtonStyle: any;

  @Input() customCssClass: string = '';

  protected RadioButtonTheme = RadioButtonTheme;
}



