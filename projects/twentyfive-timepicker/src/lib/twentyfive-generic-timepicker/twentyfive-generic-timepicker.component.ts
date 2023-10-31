import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputTheme, LabelTheme} from "../../constants/genetric-components-themes";

@Component({
  selector: 'lib-twentyfive-generic-timepicker',
  templateUrl: './twentyfive-generic-timepicker.component.html',
  styleUrls: ['./twentyfive-generic-timepicker.component.css']
})
export class TwentyfiveGenericTimepickerComponent {
  @Input() placeholder: string = 'Placeholder';
  @Input() value: string = '';
  @Input() time: any;

  @Input() labelText: string = 'Label text';
  @Input() id: string = '';
  @Input() readOnly: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;

  @Input() inputStyle: InputTheme = InputTheme.Primary;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;

  @Input() customCssClass: string = '';
  @Input() customLabelClass: string = '';

  @Output() changeTime:EventEmitter<any> = new EventEmitter<any>()



  protected readonly InputTheme = InputTheme;
  protected readonly LabelTheme = LabelTheme;
}
