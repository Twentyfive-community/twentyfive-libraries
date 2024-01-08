import {Component, Input} from '@angular/core';
import { LabelTheme } from 'twentyfive-style';
@Component({
  selector: 'lib-twentyfive-range',
  templateUrl: `./twentyfive-range.component.html`
})
export class TwentyfiveRangeComponent {
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() labelText: string = 'Label';
  @Input() id: string = 'id';
  @Input() min: string = '0';
  @Input() max: string = '5';
  @Input() step: string = '1';
  @Input() value: string = '0';

  @Input() labelStyle: any;

  @Input() customLabelClass: string = '';

  protected readonly LabelTheme = LabelTheme;

  valueChanged(e:any) {
    this.value = e.target.value;
  }
}
