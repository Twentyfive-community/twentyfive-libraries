import {Component, Input} from '@angular/core';
import {emptyFunction} from "./emptyFunction";
import {LabelTheme} from "twentyfive-input";
@Component({
  selector: 'lib-twentyfive-select',
  templateUrl: `./twentyfive-select.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveSelectComponent {
  @Input() options: any[] = [];
  @Input() defaultSelected: string = 'Seleziona un\'opzione';
  @Input() disabled: boolean = false;
  @Input() showDefaultValue: boolean = true;
  @Input() labelText: string = 'Label';
  @Input() model: any;
  @Input() showLabel: boolean = true;
  @Input() change: any = emptyFunction;


  @Input() selectStyle: SelectTheme = SelectTheme.Primary;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;

  @Input() customCssClass: string = '';
  @Input() customLabelClass: string = '';
  @Input() customDefaultCssClass: string = '';

  protected readonly SelectTheme = SelectTheme;
  protected readonly LabelTheme = LabelTheme;
}

export enum SelectTheme{
  Primary = 'select-25'
}
