import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-checkbox',
  templateUrl: `./twentyfive-checkbox.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveCheckboxComponent {
  @Input() checkboxText: string = '';
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;

  @Input() checkboxStyle: CheckboxTheme = CheckboxTheme.Primary;

  @Input() customCssClass: string = '';
  protected readonly CheckboxTheme = CheckboxTheme;
}
export enum CheckboxTheme{
  Primary = 'checkbox-25'
}
