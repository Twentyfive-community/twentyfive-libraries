import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckboxTheme} from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-checkbox',
  templateUrl: `./twentyfive-checkbox.component.html`
})
export class TwentyfiveCheckboxComponent {

  @Input() checkboxText: string = '';
  @Input() customCssClass: string = '';

  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;

  @Input() checkboxStyle: any;
  @Input() value: any;

  @Output() changeValue = new EventEmitter<any>();

  protected readonly CheckboxTheme = CheckboxTheme;
}
