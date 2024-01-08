import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbTimepickerConfig} from "@ng-bootstrap/ng-bootstrap";
import { LabelTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-input-timepicker',
  templateUrl: './twentyfive-input-timepicker.component.html',
  styleUrls: ['./twentyfive-input-timepicker.component.css']
})
export class TwentyfiveInputTimepickerComponent {

  @Input() time:any;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() labelText: string = 'Label text';
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;
  @Input() customLabelClass: string = '';
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();

  constructor(config: NgbTimepickerConfig) {
    config.spinners = false;
  }

  protected readonly LabelTheme = LabelTheme;
}
